import reactJS from './images/reactJS.png';

let state = {
   
    BasicInformation: {
        fio: 'Шульгин Денис Александрович',
        date_of_birth: '22.03.1991 (29)',
        city: 'г.Воронеж',
        phone: '+7 900 956-93-11',
        mail: 'D.A.Shulgin2019@ya.ru',
        skype: 'live:15ef9fc83a907cc8',
        skill1: 'Java-Script',
        skill2: 'ReactJS',
        skill3: 'HTML & CSS',
        link_gitlab: 'https://gitlab.com/users/DAShulgin/projects?nav_source=navbar',
        link_guthub: 'https://github.com/DAShulgin?tab=repositories'
    },

    Experience: {
        job1: [
            {
                date_of_working: '12.2015 – 02.2019',
                name_organization: 'ФАУ «ГНИИИ ПТЗИ ФСТЭК России»',
                position: 'Научный сотрудник',
                job_function: 'Разработка научной документации, средств автоматизированного сбора информации с информационных ресурсов по тематике ИБ, наполнение раздела угроз bdu.fstec.ru, настройка СЗИ',
                additional_position: 'Администратор (АС)',

            }
        ],
        job2: [
            {
                date_of_working: '12.2019 - по настоящие время',
                name_organization: 'АО РТК - ПАО МТС ',
                position: 'Администратор прикладных систем',
                job_function: 'Линия поддержки ИС компании, решение заявок с тех.ошибками работы системы, анализ средствами мониторинга Zabbix, Grafana, разбор логов Kibana, заведение задач в Jira',
            }
        ]
    },

    Education: {
        ed1: [
            {
                date_of_ed_end: '01.2019',
                name_organization: 'ВИВТ- АНОО ВО',
                direction_of_preparation: 'Информатика и вычислительная техника',
                training_profile: 'Информационное и программное обеспечение автоматизированных систем',
                dop_info: 'Высшее образование, Выпускная квалификационная работа, научная степень Магистр.'
            }
        ],
        ed2: [
            {
                date_of_ed_end: '06.2015',
                name_organization: 'ФГБОУ ВПО «ВГТУ»',
                direction_of_preparation: 'Информатика и вычислительная техника',
                training_profile: 'Вычислительные машины, комплексы, системы и сети',
                dop_info: 'Высшее образование, Диплом, научная степень Бакалавр.'
            }
        ]
    }
}

export default state;