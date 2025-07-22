# 💍 Hashdchan - מערכת שידוכים חכמה

**BeSiyata DeShmaya - מערכת ניהול שידוכים מתקדמת**  
מערכת אינטרנטית לניהול תהליכי שידוכים, הכוללת משתמשים מסוגים שונים (שדכנים, הורים, מועמדים ומנהל), עם תמיכה במילוי טפסים, שליחת מיילים אוטומטיים, ניהול מועמדים ומעקב אחר תהליך השידוך.

---

## 🚀 תכונות עיקריות

- יצירת משתמשים לפי סוג (Admin, Parent, Matchmaker,)
- ממשקי ניהול מתקדמים לשדכנים והורים
- מילוי טפסים דינמיים למועמדים עם Enum-ים בעברית
- מערכת אימות והרשאות מבוססת JWT
- שליחת מיילים אוטומטית בעת יצירת התאמה
- תמיכה בהעלאת תמונות וקבצים (קורות חיים)
- עיצוב רספונסיבי ונוח למובייל ודסקטופ

---

## 🛠 טכנולוגיות בשימוש  
- **Backend:** ASP.NET Core C#, Entity Framework, JWT, REST API   
- **Frontend:** React, Redux, TypeScript, CSS Modules  
- **Database:** SQL Server  
- **CI/CD:** GitHub + Git  
- **Dev Tools:** Swagger, Visual Studio 2022

  **שירותים נוספים:** SMTP לשליחת מיילים

---

## 🚀 הוראות להרצת המערכת

### 🧠 דרישות מוקדמות
- Visual Studio 2022 עם תמיכה ל־.NET 8  
- Node.js גרסה 18 ומעלה  
- SQL Server מותקן או Azure SQL  
- Chrome/Edge מותקן  
- חיבור לאינטרנט (לבדיקת דואר/תמונות)

### 🖥️ צד שרת (C# ASP.NET Core)
- פתחו את פתרון ה־C# (.sln) ב־Visual Studio או VS Code.

- ודאו שקובץ appsettings.json מוגדר כראוי (חיבור למסד הנתונים, כתובת CORS וכו').

- הריצו את הפרויקט על ידי לחיצה על ▶️ (Start Debugging) או על ידי הפקודה:
bash
dotnet run
- ה־Swagger ייפתח אוטומטית (לרוב בכתובת https://localhost:5001/swagger או http://localhost:5000/swagger) – מכאן תוכלו לבדוק את ה־API.

### 🌐 צד לקוח (React)
- עברו לתיקיית צד הלקוח (לרוב client או frontend)
- התקינו את התלויות:
bash
npm install
- הריצו את האפליקציה:
bash
npm start
- האפליקציה תעלה אוטומטית בכתובת:

arduino
http://localhost:3000

⚙️ הגדרות CORS (בצד שרת)
ודאו שכתובת ה־Frontend (http://localhost:3000) מוגדרת כ־Allowed Origin בקובץ ההגדרות או בקונפיגורציית ה־CORS בקוד.
