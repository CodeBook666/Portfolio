from flask import Flask, render_template, request, redirect, flash, url_for
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)
app.secret_key = "supersecretkey123"  # Required for flash messages

SENDER_EMAIL = "kenulibulathsinghela@gmail.com"
APP_PASSWORD = "kdnjzdkhemzxmkza"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/send_email", methods=["POST"])
def send_email():
    name = request.form["name"]
    email = request.form["email"]
    subject = request.form.get("subject", "No Subject")
    message = request.form["message"]

    body = f"""
You received a new message from your portfolio contact form:

Name: {name}
Email: {email}
Message: {message}
"""

    msg = MIMEMultipart()
    msg["From"] = SENDER_EMAIL
    msg["To"] = SENDER_EMAIL
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain"))

    try:
        server = smtplib.SMTP("smtp.gmail.com", 587, timeout=10)
        server.starttls()
        server.login(SENDER_EMAIL, APP_PASSWORD)
        server.send_message(msg)
        server.quit()
        flash("Your message was sent successfully!", "success")
    except Exception as e:
        print(f"Error sending email: {e}")
        flash("Something went wrong. Please try again.", "error")

    return redirect(url_for("index") + "#contact-form")

if __name__ == "__main__":
    app.run(debug=True)