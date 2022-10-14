import ReactFullpage from '@fullpage/react-fullpage';
import './main.scss';
import { profile, pfdata } from './Data';
import { useState, useRef, useEffect } from 'react';

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
                                <h1>PORTFOLIO</h1>
                                <span>2022 {profile.name}</span>
                                <strong>{profile.objective}</strong>
                            </div>
                            {
                                PFS.map((it, idx) => {
                                    return (
                                        <div className="section" key={it.id}>
                                            <div className="case">
                                                <div className="preview">
                                                    <img src="" alt={it.title} />
                                                </div>
                                                <ul className="txtBox">
                                                    <li>{it.title}</li>
                                                    <li>{it.type}</li>
                                                    <li>{it.info}</li>
                                                    <li>
                                                        <a href={it.link} target="_blank">
                                                            <button>SITE LINK</button>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="section">
                                <div className="case">PROFILE</div>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </div >
    )
}

export default Main