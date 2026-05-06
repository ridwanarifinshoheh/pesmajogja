from flask import Flask, render_template

app = Flask(__name__)

# ================= HOME =================
@app.route("/")
def home():
    return render_template("index.html")


# ================= PROGRAM =================
@app.route("/program")
def program():
    return render_template("program.html")


# ================= CONTACT =================
@app.route("/contact")
def contact():
    return render_template("contact.html")


# ================= DAFTAR =================
@app.route("/daftar")
def daftar():
    return render_template("daftar.html")


# ================= LOGIN =================
@app.route("/login")
def login():
    return render_template("login.html")


# ================= ADMIN =================
@app.route("/admin")
def admin():
    return render_template("admin.html")


# ================= RUN =================
if __name__ == "__main__":
    app.run(debug=True)