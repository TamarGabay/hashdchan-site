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
