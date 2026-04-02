from flask import Flask, request, redirect

app = Flask(__name__)

@app.route("/contact", methods=["POST"])
def contact():

    name = request.form["name"]
    email = request.form["email"]
    message = request.form["message"]

    print("New Message")
    print("Name:", name)
    print("Email:", email)
    print("Message:", message)

    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)