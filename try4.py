# Import necessary modules
from flask import Flask, render_template, request, redirect, url_for
import sqlite3

# Initialize Flask app
app = Flask("_Leone bet_")

# Define routes
@app.route('/')
def index():
    # Display homepage with available betting markets
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    # Handle user login
    if request.method == 'POST':
        # Validate user credentials
        # Redirect to dashboard if login is successful
        return redirect(url_for('dashboard'))
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    # Handle user registration
    if request.method == 'POST':
        # Create new user account
        # Redirect to login page after successful registration
        return redirect(url_for('login'))
    return render_template('register.html')

@app.route('/dashboard')
def dashboard():
    # Display user dashboard with betting history, balance, etc.
    return render_template('dashboard.html')

# Other routes for betting, depositing funds, etc.

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)

