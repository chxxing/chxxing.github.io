import ReactFullpage from '@fullpage/react-fullpage';
import './main.scss';
import { profile, pfdata } from './Data';
import { useState, useRef, useEffect } from 'react';
import SVGComponent from './SVGComponent';
import { BsHouseDoor, BsPersonCircle, BsTwitter } from "react-icons/bs";
import { IoAirplane } from 'react-icons/io5';

const AC = pfdata.map(el => el = el.title);
const PFS = pfdata.slice(1, 5);

const Cover = ({ on, setOn }) => {
    const cover = useRef(null);
    const wheelStop = e => {
        e.stopPropagation();
    };
    useEffect(() => {
        cover.current.addEventListener('wheel', wheelStop);
        return () => {
            cover.current.removeEventListener('wheel', wheelStop);
        }
    }, [])
    return (
        <div className={`Cover ${on ? "on" : ""}`} ref={cover}>
            <ul>
                {
                    pfdata.map((it, idx) => {
                        return (
                            <li key={idx} onClick={() => setOn(!on)}>
                                <a href={`#${it.title}`}>{it.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
const Main = () => {
    const [on, setOn] = useState(false);
    const [num, setNum] = useState(1);

    return (
        <div className='PF'>
            <Cover on={on} setOn={setOn} />
            <button className={`btn ${on ? "on" : ""}`} onClick={() => setOn(!on)}>
                <span>cover open</span>
            </button>
            <nav className="Gnb">
                <ul>
                    {
                        pfdata.map((it, idx) => {
                            return (
                                <li key={it.id} className={idx === num ? 'on' : ''}>
                                    <a href={`#${it.title}`}>{it.title}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <ul className="left">
                <li className='subtitle'>2022<br />Choi EunJin's<br />Portfolio</li>
                <li><a href='#main'><BsHouseDoor className='iconHome' /></a>
                </li>
                <li><a href="#profile"><BsPersonCircle className='iconContact' /></a>
                </li>
            </ul>
            <ReactFullpage
                //fullpage options
                licenseKey={'YOUR_KEY_HERE'}
                scrollingSpeed={1000}
                anchors={[...AC]}
                afterLoad={(o, d) => setNum(d.index)}

                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <div className="title">
                                    <div className="slogan">{profile.slogan}</div>
                                    <h1>PORTFOLIO</h1>
                                    <strong className='obj'>{profile.objective}</strong>
                                </div>
                                <div className="bg">
                                    <SVGComponent />
                                    <IoAirplane className='icoBg' />
                                </div>
                            </div>
                            {
                                PFS.map((it, idx) => {
                                    return (
                                        <div className="section pj" key={it.id}>
                                            <div className="case">
                                                <div className="preview">
                                                    <a href={it.link} target="_blank">
                                                        <img src={process.env.PUBLIC_URL + '/assets/images/moniter.png'} alt={it.title} />
                                                    </a>
                                                </div>
                                                <div className="txtBox">
                                                    <ul>
                                                        <li className='site_title'>{it.title}</li>
                                                        <li><strong>TYPE</strong> {it.type}</li>
                                                        <li><strong>INFO</strong> {it.info}</li>
                                                        <li><strong>FONT</strong> {it.font}</li>
                                                        <li><strong>SKILLS</strong> {it.skill}</li>
                                                        <li><strong>COLOR</strong> : {it.color}</li>
                                                        <li>
                                                            <a href={it.link} target="_blank">
                                                                <button>SITE LINK</button>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="section sec_profile">
                                <div className="case">
                                    <div className="boxLeft">
                                        <div className='pic'>
                                            <img src={process.env.PUBLIC_URL + '/assets/images/profile.png'} alt="" />
                                        </div>
                                        <dl className="aboutMe">
                                            <dt>PROFILE</dt>
                                            <dd><strong>NAME : </strong>{profile.kname} ( {profile.name} )</dd>
                                            <dd><strong>E-MAIL : </strong><a href={`mailto:${profile.email}`}>{profile.email}</a></dd>
                                            <dd><strong>TEL : </strong><a href={`tel:${profile.tel}`}>{profile.tel}</a></dd>
                                        </dl>
                                    </div>
                                    <div className="boxRight">
                                        <div className="box">
                                            <dl className='ed'>
                                                <dt>EDUCATION</dt>
                                                {
                                                    profile.education.map(it => {
                                                        return (
                                                            <dd>
                                                                {it.ed}
                                                            </dd>
                                                        )
                                                    })
                                                }
                                            </dl>
                                            <dl className='sk'>
                                                <dt>SKILL & ABILITY</dt>
                                                {
                                                    profile.skills.map(it => {
                                                        return (
                                                            <dd>
                                                                {it.sk}
                                                            </dd>
                                                        )
                                                    })
                                                }
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </div >
    )
}

export default Main
