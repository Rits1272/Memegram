from flask import Flask,url_for, jsonify, request, abort
from flask_sqlalchemy import SQLAlchemy
from passlib.apps import custom_app_context as pwd_context

app = Flask(__name__)
app.config["DEBUG"] = True
db = SQLAlchemy(app)

SQLALCHEMY_DATABASE_URI = "mysql+mysqlconnector://{username}:{password}@{hostname}/{databasename}".format(
    username="********",
    password="*********",
    hostname="*********",
    databasename="*******",
)
app.config["SQLALCHEMY_DATABASE_URI"] = SQLALCHEMY_DATABASE_URI
app.config["SQLALCHEMY_POOL_RECYCLE"] = 299
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False


class User(db.Model):
    """
    For Authentication
    """
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(32), index = True)
    password_hash = db.Column(db.String(128))

    def hash_password(self, password):
        self.password_hash = pwd_context.encrypt(password)

    def verify_password(self, password):
        return pwd_context.verify(password, self.password_hash)


@app.route('/api/users/register', methods = ['POST'])
def register():
    username = request.json.get('username')
    password = request.json.get('password')
    if username is None or password is None:
        return jsonify({"message": "username or password cannot be blank"})
    if User.query.filter_by(username = username).first() is not None:
        return jsonify({"message": "username already exists"})
    user = User(username = username)
    user.hash_password(password)
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "New user created successfully"}), 201


@app.route('/api/users/login', methods = ['GET'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')
    if username is None or password is None:
        return jsonify({"message" : "username or password cannot be blank"})
    if User.query.filter_by(username = username).first() is None:
        return jsonify({"message" : "Invalid Credentials"})
    user = User.query.filter_by(username = username).first()
    print(user.username)
    print(user.password_hash)
    if(user.verify_password(password) == True):
        return jsonify({'message' : "Login Successful"}), 200
    return jsonify({"message" : "Login Unsuccessful"}), 400


if __name__ == '__main__':
    db.create_all()
    app.run()

