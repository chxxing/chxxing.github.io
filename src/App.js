import ReactFullpage from '@fullpage/react-fullpage';
import './main.scss';
import { profile, pfdata } from './Data';

const AC = pfdata.map(el => el = el.title);

const App = () => {
    return (
        <div>
            <nav className="Gnb">
                <ul>
                    {
                        pfdata.map((it, idx) => {
                            return (
                                <li key={idx}>
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
                anchors={['cover', ...AC, 'profile']}

                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <div className="case">PORTFOLIO</div>
                            </div>
                            {
                                pfdata.map((it, idx) => {
                                    return (
                                        <div className="section" key={it.id}>
                                            <div className="case">
                                                <div className="preview">
                                                    <img src="" alt="" />
                                                </div>
                                                <ul className="txtBox">
                                                    <li>{it.title}</li>
                                                    <li>{it.type}</li>
                                                    <li>{it.info}</li>
                                                    <li>
                                                        <a href={it.link} target="_blank">
                                                            SITE LINK
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
        </div>
    )
}

export default App;
