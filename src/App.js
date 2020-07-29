import React from 'react';
import './App.css';
import photo from './images/ава.png'
import iconGitlab from './images/gitlab.png';
import iconGithub from './images/github.png';
import iconSkipe from './images/Skype_t.png';
import iconPhone from './images/mobile.png';
import iconYandex from './images/ya.png';

const App = (props) => {

  const s = props.state;
  const bInfo = s.BasicInformation;
  const exp1 = s.Experience.job1[0];
  const exp2 = s.Experience.job2[0];
  const ed1 = s.Education.ed1[0];
  const ed2 = s.Education.ed2[0];


  return (
    <div className="grid">

      <div className="block1">

        <div className='blok1_img'>
          <img className='photo' src={photo} />
        </div>

        <div className='Main'>

          <div> <h2>{bInfo.fio}</h2></div>
          <div>{bInfo.date_of_birth} </div>
          <div>{bInfo.city}</div>

        </div>
      </div>

      <div className="block2">
        <div className='Main'><b>КОНТАКТЫ</b>
          <div><img className='icon' src={iconPhone} /> <b>{bInfo.phone}</b> </div>
          <div><img className='icon' src={iconYandex} /> <b>{bInfo.mail}</b> </div>
          <div><img className='icon' src={iconSkipe} /> <b>{bInfo.skype}</b></div>
        </div>
      </div>

      <div className="block3">
        <div className='Main'>
          <div><b>НАВЫКИ</b></div>
          <div>{bInfo.skill1}</div>
          <div>{bInfo.skill2}</div>
          <div>{bInfo.skill3}</div>
        </div>
      </div>

      <div className="block4">
        <div className='Main'>
          <div><b>ССЫЛКИ</b></div>
          <div><img className='icon' src={iconGitlab} />
            <a href={bInfo.link_gitlab}> <b> Репозиторий на GitLab</b></a> </div>
          <div> <img className='icon' src={iconGithub} />
            <a href={bInfo.link_guthub}> <b> Репозиторий на GitHub </b></a></div>
        </div>
      </div>

      <div className='block5'>

        <div className='Main'>

          <div className="Main"><b>ОБРАЗОВАНИЕ</b></div>
          <div>
          <div><li> {ed2.date_of_ed_end} {ed2.name_organization} </li></div>
            <div>{ed2.direction_of_preparation}</div>
            <div>{ed2.training_profile}</div>
            <div>{ed2.dop_info}</div>
            <hr/>
            <div><li> {ed1.date_of_ed_end} {ed1.name_organization} </li></div>
            <div>{ed1.direction_of_preparation}</div>
            <div>{ed1.training_profile}</div>
            <div>{ed1.dop_info}</div>
          </div>

          <hr/>
          <div>
          <div className="Main"> <b>ОПЫТ РАБОТЫ</b></div>
            <div><li> {exp1.date_of_working} {exp1.name_organization} </li></div>
            <div>{exp1.position}</div>
            <div>{exp1.job_function}</div>
            <div>{exp1.additional_position}</div>
            <hr/>
            <div><li> {exp2.date_of_working} {exp2.name_organization} </li></div>
            <div>{exp2.position}</div>
            <div>{exp2.job_function}</div>
            <div>{exp2.additional_position}</div>
            <hr/>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
