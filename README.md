**_ Personal Portfolio Website_**

A modern personal portfolio website built using HTML, CSS, and Python Flask to showcase my skills, projects, and professional profiles.
The website also includes a contact form with automated email functionality, allowing visitors to send messages directly from the site. This portfolio highlights my work and interests in Data Analytics, Software Development, and Project Management.

_**Features**_

**Personal Introduction** : 
Displays a professional overview of my skills, background, and career interests.

**Project Showcase** : 
Projects are organized using filter buttons:

All:
- Data Analyst
- Project Manager
- Developer

This allows visitors to easily explore projects based on different roles.

**Contact Form with Email Automation** : 
- Visitors can send messages through the website.
- The form sends emails automatically using Python Flask and SMTP integration.

**Downloadable CVs** : 
Users can download my resumes directly from the website:

-Data Analyst CV

-Project Manager CV

**Professional Links**
- GitHub
- LinkedIn

**Technologies Used**
1. Frontend;
- HTML5
- CSS3
- Responsive Design

2. Backend;
- Python
- Flask

**Email Integration**
- SMTP (Gmail Server)
- Python smtplib
- MIME Email Formatting

_**How to Run the Project**_
1️. Clone the repository
git clone https://github.com/yourusername/portfolio.git

2️. Navigate to the project folder
cd portfolio

3️. Install dependencies
pip install flask

4️. Run the Flask server
python server.py

5️. Open in your browser
http://127.0.0.1:5000

**Email Contact Feature**
The contact form allows visitors to send messages directly to my email.

This functionality is implemented using:
- Flask form handling
- Python SMTP email sending
- Gmail App Password authentication

When a message is submitted:
- The form data is captured using Flask.
- An email is generated using MIMEMultipart.
- The message is sent to my email inbox automatically.
  
_**Future Improvements**_
- Add more project detail pages
- Implement database storage for messages
- Improve UI animations
- Deploy the portfolio online
  
**Author**
_~ Kenuli Bulathsinghela_
- Email: kenulibulathsinghela@gmail.com
- LinkedIn: https://linkedin.com/in/kenulibulathsinghela
- GitHub: https://github.com/CodeBook666
