from flask import Flask, render_template, redirect, url_for, flash, request
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, UserMixin, login_user, current_user, logout_user, login_required

# Initialize Flask app
app = Flask(__name__)
app.config['SECRET_KEY'] = 'asah2201'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize extensions
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'
login_manager.login_message_category = 'info'

# Define models directly in the main app file
class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)

class UniversityRating(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    university_name = db.Column(db.String(100), nullable=False)
    feature_rating = db.Column(db.Integer, nullable=False)
    commodity_rating = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f'<UniversityRating {self.university_name}>'

# Create tables
with app.app_context():
    db.create_all()

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route("/")
@app.route("/home")
@login_required
def home():
    # Fetch top 20 universities by feature and commodity ratings
    top_feature_universities = UniversityRating.query.order_by(UniversityRating.feature_rating.desc()).limit(20).all()
    top_commodity_universities = UniversityRating.query.order_by(UniversityRating.commodity_rating.desc()).limit(20).all()
    return render_template('home.html', top_feature_universities=top_feature_universities, top_commodity_universities=top_commodity_universities)

@app.route("/register", methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('home'))
    if request.method == 'POST':
        username = request.form.get('username')
        email = request.form.get('email')
        password = request.form.get('password')
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        user = User(username=username, email=email, password=hashed_password)
        db.session.add(user)
        db.session.commit()
        flash('Your account has been created! You are now able to log in', 'success')
        return redirect(url_for('login'))
    return render_template('register.html')

@app.route("/login", methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('home'))
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        user = User.query.filter_by(email=email).first()
        if user and bcrypt.check_password_hash(user.password, password):
            login_user(user, remember=request.form.get('remember'))
            next_page = request.args.get('next')
            return redirect(next_page) if next_page else redirect(url_for('home'))
        else:
            flash('Login Unsuccessful. Please check email and password', 'danger')
    return render_template('login.html')

@app.route("/logout")
def logout():
    logout_user()
    return redirect(url_for('login'))

@app.route('/rate', methods=['GET', 'POST'])
@login_required
def rate():
    if request.method == 'POST':
        university_name = request.form.get('university_name')
        feature_rating = request.form.get('feature_rating')
        commodity_rating = request.form.get('commodity_rating')

        new_rating = UniversityRating(
            university_name=university_name,
            feature_rating=int(feature_rating),
            commodity_rating=int(commodity_rating)
        )

        db.session.add(new_rating)
        db.session.commit()
        flash('Your rating has been submitted!', 'success')
        return redirect(url_for('home'))

    university = request.args.get('university', '')
    return render_template('rating.html', university=university)

if __name__ == '__main__':
    app.run(debug=True)
