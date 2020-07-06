import React, { Component } from 'react';
import './styles.css';
import photo from './avatar-2.png';
import {RatingPlace} from '../../Components/Rate/Rate';


const List = (props) => {
    return (
        <ul style={props.style}>
            {props.title?(
                <li><h3>{props.title}</h3></li>
            ):undefined}
            {props.list.map((prop,i)=>(
                <li key={i}>
                    <div className="row">
                        <div className={props.className1}>{prop.content1}</div>
                        <div className={props.className2}>{prop.content2}
                            <small>{prop.comment}</small>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

const InformationCard = (props) =>{
    return (
        <ul className="information">
            <li><h6>{props.date}</h6></li>
            <li><h4>{props.title}</h4></li>
            <li><p>{props.children}</p></li>
        </ul>);
}

const SectionCV = (props) =>{
    return (
        <section className={props.className}>
            <h2 className="section_header">{props.title}</h2>
            {props.children}
        </section>
    );
}

class CV extends Component {
    render() {
        return (
            <div className="cv container scrollbar" style={{padding:15,height:window.innerHeight,overflow:'hidden scroll'}}>
                <div className="avatar shadow" style={{ backgroundColor:'var(--text-color-2)',width:310,marginTop:150,height:'min-content'}}>
                    <div style={{
                        width:300,
                        height:300,
                        padding:'5px',
                        backgroundColor: 'var(--text-color-2)',
                        marginTop:-150,
                        borderRadius:'50%'
                    }}>
                        <img src={photo} className="shadow img" alt="avatar" style={{
                            backgroundColor:'var(--primary-color)',
                            width:'inherit',
                            borderRadius:'50%'
                        }}/>
                    </div>
                    <div className="contacts">
                        <List
                            title='Contacts'
                            className1='col s2'
                            className2='col s10'
                            list ={[
                                {
                                    content1:(<i className="material-icons">location_on</i>),
                                    content2:'Ikianja Ambohimangakely'
                                },
                                {
                                    content1: (<i className="material-icons">mail</i>),
                                    content2: 'finaritrandrianiaina@gmail.com'
                                }
                            ]}
                        />
                        <List
                            title='Languages'
                            className1='col s5'
                            className2='col s7'
                            list={[
                                {
                                    content1:'Malagasy',
                                    content2:(<RatingPlace nums={5}/>),
                                    comment:"langue maternelle"
                                }, {
                                    content1: 'Français',
                                    content2: (<RatingPlace nums={5} />),
                                    comment: "très à l'aise parlé et écrit"
                                }, {
                                    content1: 'English',
                                    content2: (<RatingPlace nums={4} />),
                                    comment: "très à l'aise écrit, parlé moyen"
                                }
                            ]}
                        />
                        <ul>
                            <li><h3>Programming languages </h3></li>
                            <li><p>Python, Java, C++, C, Pascal, PHP, C#, Javascript,  HTML, CSS, Typescript</p></li>
                        </ul>
                        <List
                            title='Skills'
                            className1='col s5'
                            className2='col s7'
                            list={[
                                {
                                    content1:'Reactjs',
                                    content2:(<RatingPlace nums={4}/>),
                                    comment:"une année d'éxperience"
                                }, {
                                    content1: 'Django+Rest Framework',
                                    content2: (<RatingPlace nums={4} />),
                                    comment: "2 ans d'éxperience"
                                }, {
                                    content1: 'Algorithms and Data Structures',
                                    content2: (<RatingPlace nums={4} />)
                                }
                            ]}
                        />
                        <ul>
                            <li><h3>Other technologies skills</h3></li>
                            <li><p>MongoDB, MySql, Flask, Nodejs, Angular, RestApi</p></li>
                        </ul>
                        <ul>
                            <li><h3>Hobbies</h3></li>
                            <li><p>lecture, séries, films, jeux vidéos, modelisation 3D</p></li>
                            <li>
                                <span className="rounded-icons"><i className="material-icons">book</i></span>
                                <span className="rounded-icons"><i className="material-icons">tv</i></span>
                                <span className="rounded-icons"><i className="material-icons">videogame_asset</i></span>
                                <span className="rounded-icons"><i className="material-icons">wallpaper</i></span>
                            </li>
                        </ul>
                        <List 
                            style={{
                                marginTop:50
                            }}
                            title={undefined}
                            className1='col s2'
                            className2='col s10'
                            list={[
                                {
                                    content1: (<span className="rounded-icons"><i className="material-icons">edit</i></span>),
                                    content2: (<a href="/">codepen.io/finaritrandrianiaina</a>)
                                }
                            ]}
                        />
                    </div>
                </div>
                <div className="about" style={{
                    padding:15
                }}>
                    <div className="cv-header" >
                        <h1>ANDRIANIAINA FINARITRA HARITIANA</h1>
                        <span>Dévellopeur</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut beatae hic doloribus aliquid. Quae reiciendis officiis atque sunt tenetur nobis accusamus necessitatibus dignissimos nulla. Quod esse temporibus iste dolorem nihil?Exercitationem veniam officiis accusamus sapiente temporibus praesentium animi et? Quas voluptates, modi eos minus quisquam quae? A officiis, quod minus rem omnis consequuntur repellendus ad perspiciatis, repellat veniam hic distinctio.</p>
                    </div>
                    <SectionCV title='EDUCATION'>
                        <InformationCard date='2017-2020' title='ISPM'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eveniet numquam sint asperiores voluptas. Exercitationem praesentium reprehenderit sequi reiciendis excepturi inventore placeat consequatur laboriosam nemo illum assumenda commodi, architecto ratione?
                        </InformationCard>
                    </SectionCV>
                    <SectionCV title='WORK EXPERIENCE'>
                        <InformationCard date='2017-2020' title='Working palace'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eveniet numquam sint asperiores voluptas. Exercitationem praesentium reprehenderit sequi reiciendis excepturi inventore placeat consequatur laboriosam nemo illum assumenda commodi, architecto ratione?
                        </InformationCard>
                    </SectionCV>
                    <SectionCV title='AWARD'>
                        <InformationCard date='2019' title='Alive human'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eveniet numquam sint asperiores voluptas. Exercitationem praesentium reprehenderit sequi reiciendis excepturi inventore placeat consequatur laboriosam nemo illum assumenda commodi, architecto ratione?
                        </InformationCard>
                    </SectionCV>
                </div>
            </div>
        );
    }
}

export default CV;