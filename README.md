## **Project Concept**

**Objective**: My journey with the "Personal Finance Tracker" is not just about developing a project; it's about crafting a personal financial assistant. This tool, grounded in advanced analytics, aims to provide precise financial health forecasts. My goal is to empower not only myself but potentially others as well, enabling more informed decisions about finances.

I have a demo launched on Render! -> https://leo-ledger.onrender.com/

**Project Significance**: More than a mere technical endeavor, this project is a deeply personal endeavor aimed at demystifying financial management for a broader audience, ranging from lower-income communities to students, and working professionals. Through predictive analytics, my ambition is to boost financial literacy, guiding users to navigate through financial challenges and plan proactively for their future.

### **Understanding the Scope**

**Key Features – From Concepts to Reality**

1. **Tracking Income and Expenses**: A core feature where users can log and monitor their finances for a crystal-clear view of their financial status.
    
2. **Categorizing Financial Transactions**: An automatic system to categorize transactions – making it simpler to understand spending habits and pinpoint areas for improvement.
    
3. **Predictive Analysis (*extra credit*)**: Using historical data to forecast future expenses and savings, aiding in strategic budget planning and financial decision-making.
    

**Intended Users**: From budget-conscious individuals and students to long-term investment planning professionals – this tool is designed for anyone looking to upgrade their financial management skills.

**Use Cases**: Whether it's regular budget tracking, setting financial goals, forecasting expenses, or identifying savings opportunities, this tool aims to cover it all.

### **Technical Journey and Choices**

**Technology Stack Decisions**

1. **Frontend**: After exploring various options, I chose HTMX for its simplicity and powerful capabilities in enhancing HTML with AJAX, WebSockets, and Server-Sent Events.
    
2. **Backend**: I chose Python with Django over Flask for its flexibility and simplicity – crucial for potential future customizations.
    
3. **Database**: Using SQLite for development and PostgreSQL for production to ensure strong consistency, transactional data integrity, and scalability.
   
4. **Styling**: Daisy UI is used for styling to provide a clean and modern look to the application.
   
5. **Hosting**: The application is hosted on Render for its simplicity and robust hosting solutions.
    

**Extra Tools**: I plan to Dockerize my app. Bun was considered, but it's currently on the "extra credit" list, possibly integrated at the project's end as an enhancement.

**Rationale Behind Choices**: Each piece of the tech stack was selected for its strength and industry relevance. HTMX for the frontend, Python and Django for a flexible backend, and SQLite + PostgreSQL for robust DEV and PROD data management, respectively – a combination that I believe will address the needs of this project effectively.

### **Project Timeline and Milestones**

**Rough Timeline**

* **Phase 1**: Conceptualization and Planning (Month 1)
    
* **Phase 2**: Development of Core Features (Months 2-4)
    
* **Phase 3**: Integration and Testing (Month 5)
    
* **Phase 4**: Launch and Feedback Incorporation (Month 6)
    
* **Note**: Aiming for completion within a year, considering personal and professional commitments. Timeline adjustments are possible.
    

**Key Milestones**

* **M1**: Project Blueprint and Requirement Analysis (End of Month 1)
    
* **M2**: Alpha Version with Basic Features (End of Month 3)
    
* **M3**: Beta Version *+Predictive Analysis* (End of Month 5)
    
* **M4**: App Launch (End of Month 6)


## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (version 16 or higher)
- Python (version 3.8 or higher)
- Django
- Git

## Getting Started

### Clone the repository:

```bash
git clone https://github.com/kdleonard93/Leo_Ledger.git
cd Leo_Ledger
```

### Create a virtual env

```bash
python -m venv venv
```

### Activate your env

```bash
source venv/bin/activate
```

### Install required packages

```bash
pip install -r requirements.txt
```

### Set up the Django environment variables. Create a .env file in the backend folder and add the following:

```plaintext
SECRET_KEY=your_secret_key
DEBUG=True
DATABASE_URL=sqlite:///db.sqlite3  # For development, use your PostgreSQL URL for production
```

### Apply Migrations

```bash
python manage.py migrate
```

### Collect static files
```bash
python manage.py collectstatic
```

### Run server
```bash
python manage.py runserver
```

#### This should get you going locally but please feel free to comment if it doesn't!
