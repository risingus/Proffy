const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async(db) => {

    proffyValue = {
        name: "Gustavo lima",
        avatar: "https://avatars3.githubusercontent.com/u/42497575?s=460&u=661e39213d8f086557b48d1eae5e1a4441425929&v=4",
        whatsapp: "85981501258",
        bio: "Sou foda",
        
    }

    classValue = {
        subject: 1,
        cost: '20',
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },

        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})
    
    const selectedProffys = await db.all("SELECT * FROM proffys")
    

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1
    `)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday =  "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    
})