# 💍 Hashdchan - מערכת שידוכים חכמה

**BeSiyata DeShmaya - מערכת ניהול שידוכים מתקדמת**  
מערכת אינטרנטית לניהול תהליכי שידוכים, הכוללת משתמשים מסוגים שונים (שדכנים, הורים, מועמדים ומנהל), עם תמיכה במילוי טפסים, שליחת מיילים אוטומטיים, ניהול מועמדים ומעקב אחר תהליך השידוך.

---

## 🚀 תכונות עיקריות

- יצירת משתמשים לפי סוג (Admin, Parent, Matchmaker, Candidate)
- ממשקי ניהול מתקדמים לשדכנים והורים
- מילוי טפסים דינמיים למועמדים עם Enum-ים בעברית
- מערכת אימות והרשאות מבוססת JWT
- שליחת מיילים אוטומטית בעת יצירת התאמה
- תמיכה בהעלאת תמונות וקבצים (קורות חיים)
- עיצוב רספונסיבי ונוח למובייל ודסקטופ

---

## 🛠️ טכנולוגיות

**Frontend:** React, Redux, TypeScript, CSS Modules  
**Backend:** ASP.NET Core C#, Entity Framework, JWT, REST API  
**DB:** SQL Server / SQLite  
**שירותים נוספים:** Nodemailer / SMTP לשליחת מיילים

---

# BSDFlow – BeSiyata DeShmaya  
**Education and Career Flow Management System**

מערכת ניהול תהליכי למידה, בוטקמפים, ראיונות, השמות והעסקה – כחלק מפרויקט הגמר שלי בתום שנתיים לימודי תכנות.

---

## 🎯 מטרת המערכת  
BSDFlow נבנתה במטרה לנהל את כל זרימת התלמידים בארגון – משלב הקורסים והבוטקמפים, דרך ראיונות והשמות, ועד קליטה לעבודה.  
המערכת מספקת כלים לניהול ישויות כמו תלמידים, מרצים, אנשי צוות, ארגונים ומשרות, תוך מתן מעקב אחר תהליכים אישיים וקבוצתיים.

---

## 🛠 טכנולוגיות בשימוש  
- **Backend:** ASP.NET Core 8, C#, Entity Framework Core  
- **Frontend:** React + TypeScript  
- **Database:** SQL Server  
- **CI/CD:** GitHub + Git  
- **Dev Tools:** Swagger, Postman, Visual Studio 2022

---

## 🚀 הוראות להרצת המערכת

### 🧠 דרישות מוקדמות
- Visual Studio 2022 עם תמיכה ל־.NET 8  
- Node.js גרסה 18 ומעלה  
- SQL Server מותקן או Azure SQL  
- Chrome/Edge מותקן  
- חיבור לאינטרנט (לבדיקת דואר/תמונות)

### 📦 התקנת צד שרת (API)
1. פתח את הסOLUTION `BSDFlow.sln` ב־Visual Studio.  
2. הגדר את פרויקט `BSDFlow.API` כברירת מחדל.  
3. הרץ `Update-Database` ממסוף Package Manager.  
4. לחץ על `IIS Express` להפעלת השרת.  
5. גש ל־`https://localhost:port/swagger` לבדוק שה-API פעיל.

### 💻 התקנת צד לקוח (React)
```bash
cd BSDFlow.Client
npm install
npm run dev
