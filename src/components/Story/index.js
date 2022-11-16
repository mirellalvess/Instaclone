import './style.css'

import Pais from './images/meuspais.jpg'
import Simba from './images/simba.jpg'
import Irmas from './images/irmas.jpg'
import Mike from './images/mike.jpg'
import Mel from './images/mel.jpg'
import Duquesa from './images/duquesinhas.jpg'
import Meninas from './images/meninas.jpg'
import Luquinhas from './images/nos.jpg'

export function Story() {
    return (
        <div className='container'>
            <div className='user-elements'>
                <div>
                <img className="image-user-story" src={Pais}  />
                </div>
                <span>Meus pais</span>
            </div>
            
            <div className='user-elements'>
                <div>
                <img className="image-user-story" src={Simba}  />
                </div>
                <span>Simba</span>
            </div>

            <div className='user-elements'>
                <div>
                <img className="image-user-story" src={Irmas}  />
                </div>
                <span>Irmãs</span>
            </div>

            <div className='user-elements'>
                <div>
                <img className="image-user-story" src={Mike}  />
                </div>
                <span>Mike</span>
            </div>

            <div className='user-elements'>
                <div>
                <img className="image-user-story" src={Mel}  />
                </div>
                <span>Mel</span>
            </div>

            <div className='user-elements'>
                <div>
                <img className="image-user-story" src={Duquesa}  />
                </div>
                <span>Duquesa</span>
            </div>

            <div className='user-elements'>
                <div>
                <img className="image-user-story" src={Meninas}  />
                </div>
                <span>Proanas</span>
            </div>

            <div className='user-elements'>
                <div>
                <img className="image-user-story" src={Luquinhas}  />
                </div>
                <span>Luquinhas</span>
            </div>
        </div>
    )
}