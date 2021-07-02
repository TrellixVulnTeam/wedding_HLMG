const bot={
    startConverssation:{
        messages:[
            {
                text:`Привет, я искусственный интеллект, разработанный 
                специально для этого особого события.`
            },
            {text:`Давайте проверим, приглашены ли вы на него.`},
            {text:`Пожалуйста, ведите свой номер телефона.`}],
        guests:[],
        error:`К сожалению, я не нашла этот номер в списке приглашённых.
        Попробуем ещё раз?`
    },
    questionsPreview: {
        messages:[
            {
                text:`Здравствуйте, я смогу ответить на некоторые вопросы.
                Выберите интересующий вас вопрос в списке. .`
            },
     
        ],
        questions:{
            quesstion:[
                {
                    id:1,
                    text:`Какой дресс-код?`,
                    answer:`Молодожены старались сделать праздник красивым, и они будут рады, если вы поддержите цветовую гамму их свадьбы.
                    Чтобы подчеркнуть значимость этого мероприятия, вас просят остановить выбор на соответствующих случаю вечерних нарядах: Женщины - избегайте белых, черных и красных цветов. Мужчины - вечерний костюм или пиджак и брюки.»`
                },
                {
                    id:2,
                    text:`Что лучше подарить?`,
                    answer:`
                        У молодоженов есть заветная мечта, осуществление которой требует финансовых вложений. Если не знаете, что подарить, помогите сбыться их мечте :)
                     `
                }, 
                {
                    id:3,
                    text:`Откройте форму для заполнения`,
                    answer:`https://forms.gle/G8vCG8oC79BCgdyZ6`,
                    tag:`a`
                },
                
            ]
        },
        answers:[],
        
        error:`К сожалению, я не нашла ответ на данный вопрос в списке.
        Попробуем ещё раз?`
    },
    phones:[
        {
            p:"+79653150435",
            ph:"+79011888378",
            firstName:"Андрей",
            lastName:"Панов",
            status:"Жених",
            full:true
        },
        {
            p:"+79268979607",
            firstName:"Владимир",
            lastName:"Корнаков,",
        },
        {
            p:"+79779472431",
            firstName:"Мгер",
            lastName:"Маргарян",
            status:"и Наталия,"
        },{
            p:"+79261887955",
            firstName:"Валентина",
            lastName:"Владимировна,",
            full:true
        },{
            p:"+79055187000",
            firstName:"Радий",
            lastName:"Мугтасимович,",
            full:true
        },{
            p:"+79636205454",
            firstName:"Ирина",
            lastName:"Анатольевна,",
            full:true
        },{
            p:"+79685205454",
            firstName:"Александр",
            lastName:"Валериевич,",
            full:true
        },{
            p:"+79157998554",
            firstName:"Вадим",
            lastName:"Диденко,",
            
        },{
            p:"+79651394444",
            firstName:"Валерий",
            lastName:"Мыльцев,",
        },{
            p:"+79167620876",
            firstName:"Иван",
            lastName:"Степашкин,",
        },{
            p:"+79775688272",
            firstName:"Влада ",
            lastName:"Яшина",
            status:"и Фарух,",
            full:true
        },{
            p:"+79777760397",
            firstName:"Расим",
            lastName:"Дасаев,",
        },{
            p:"+79859991288",
            firstName:"Валерий",
            lastName:"Кузьмич,",
        },{
            p:"+79857773525",
            firstName:"Владимир",
            lastName:"Владимирович,",
            
    
        
        },{
            p:"+79161206471",
            firstName:"Павел,",
            lastName:"Надежда,",
            status:"Дарья, Серафим и Егор,",
            full:true
        },{
            p:"+79167167377",
            firstName:"Дмитрий",
            lastName:"Есипов,",
        },{
            p:"+79017700292",
            firstName:"Артем",
            lastName:"Жуков",
            status:"и Анастасия,"
        },{
            p:"+79629240306",
            firstName:"Елена",
            lastName:"Журату,",
            status:"и Виктор,"
        },{
            p:"+79951171713",
            firstName:"Юрий Алексей",
            lastName:"Баринов,",
            full:true
        },
        {
            p:"+79771631019",
            firstName:"любимая",
            lastName:"Невеста,",
            full:true
        },{
            p:"+79688822682",
            firstName:"Наталья,",
            lastName:"",
        },{
            p:"+79998148845",
            firstName:"Андрей",
            lastName:"Нерсесян,",
        },{
            p:"+79649703621",
            firstName:"Алексей",
            lastName:"Пономаренко",
            status:"и Алиса,"
        },{
            p:"+79629822983",
            firstName:"Дионис",
            lastName:"Кузьминов,",
        },{
            p:"+79031995007",
            firstName:"Дина",
            lastName:"Анатольевна,",
        },{
            p:"+79153182156",
            firstName:"Иван и Полина",
            lastName:"Харламовы,",
        },{
            p:"+79099029290",
            firstName:"Федор",
            lastName:"Бакулов,",
        },{
            p:"+79162356303",
            firstName:"Вера",
            lastName:"Николаевна",
            status:"и Анатолий Иванович,",
            full:true
        },{
            p:"+79160238844",
            firstName:"Петр",
            lastName:"Бакулов,",
        },{
            p:"+79166716287",
            firstName:"Максим",
            lastName:"Белоусов,",
        },
        {
            p:"+79111444895",
            firstName:"Максим",
            lastName:"Шестаков,",
        },
        {
            p:"+79888888888",
            firstName:"Андрей",
            lastName:"Мирзоян,",
        },
        {
            p:"+79175325168",
            firstName:"Олия",
            lastName:"Мугтасимовна,",
        },{
            p:"+79683655777",
            firstName:"Сания",
            lastName:"Мугтасимовна,",
        },{
            p:"+79166410264",
            firstName:"Зухра Исламовна",
            lastName:"и Гали Ильясович,",
        },{
            p:"+79165376555",
            ph:"+79167252095",
            firstName:"Галина",
            lastName:"Анатольевна,",
        },{
            p:"+79856127002",
            firstName:"Наталия Владимировна",
            lastName:" и Владимир Алексеевич,",
            full:true
        },{
            p:"+79637732585",
            firstName:"Георгий ",
            lastName:"Симакин,",
        },{
            p:"+79167529975",
            firstName:"Анастасия",
            lastName:"и Павел,",
        },{
            p:"+79152239823",
            firstName:"Денис ",
            lastName:"Караблут,",
        },{
            p:"+79264411550",
            firstName:"Михаил ",
            lastName:"Парчайкин,",
        },{
            p:"+79196620505",
            firstName:"Михаил",
            lastName:"Сидоров,",
        },{
            p:"+79253686109",
            firstName:"Екатерина,",
            lastName:"",
        },{
            p:"+79774928256",
            firstName:"Андрей Бурмаков",
            lastName:"и Арина,",
        },{
            p:"+79166034450",
            firstName:"Ирина",
            lastName:"Ярославовна,",
        },{
            p:"+79019823339",
            firstName:"Денис",
            lastName:"Якимов,",
        },
        {
            p:"+79680791544",
            firstName:"Дарья",
            lastName:"и Владимир,",
        },
        {
            p:"+79164433336",
            firstName:"Елена Васильевна",
            lastName:"и Михаил Викторович,",
        },
        {
            p:"+79165741225",
            firstName:"Анастасия",
            lastName:"Голованова,",
        },
        {
            p:"+79639629363",
            firstName:"Мария",
            lastName:"Золотухина,",
        },
        {
            p:"+79166716287",
            firstName:"Максим",
            lastName:"Белоусов,",
        },
]
  
}
export default bot