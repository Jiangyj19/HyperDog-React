/**
 * author: ღ
 * date: 2022/5/25
 */
import React, { Fragment, useState } from 'react'
import './index.scss'
import './h5_index.scss'
import Headers from './../../components/header/index.js'
import Footers from './../../components/footer/index.js'
import withRouter from '../../components/withRouter'
import Bg1 from '../../assets/images/01.png'
import Bg0 from '../../assets/images/0.png'
import JEFFK from '../../assets/images/home/jeffk.png'
import NorrisC from '../../assets/images/home/NorrisC.png'
import Boredfish from '../../assets/images/home/Boredfish.png'
import KafkaCoo from '../../assets/images/home/KafkaCoo.png'
import Twitter from "../../assets/images/twitter.png";
import Discord from "../../assets/images/discord.png";
// import Texty from 'rc-texty'
// import 'rc-texty/assets/index.css'


const Index = (props) => {

    const [ doodlesList, setDoodlesList ] = useState([
        {
            img: JEFFK,
            name: 'JEFFK',
            desc: 'VC, continuous entrepreneurs, early blockchain participants, extreme sports enthusiasts. Invested and participated in more than 20 start-ups. Cornell MBA'
        },
        {
            img: NorrisC,
            name: 'NorrisC',
            desc: 'Norris C, a Hong Kong based designer, artist, economist. Norris past designing for powerful businessman, now he devoted himself to create a new era of meta-universe space.'
        },
        {
            img: Boredfish,
            name: 'Boredfish',
            desc: 'A serial entrepreneurs and block-chain builder since 2015. Specialized in community operation, branding and research.'
        },
        {
            img: KafkaCoo,
            name: 'KafkaCoo',
            desc: 'Core Team of FoundationDAO,by the people to bulid the ark of human civilization through web3. Also is a holder of blue chip NFT(BAYC, CryptoPunks, Moonbirds, Doodles, CloneX, etc..)'
        }
    ])

    const [ doodlesListSeeDesc, setDoodlesListSeeDesc ] = useState('')

    return <Fragment>

            <Headers { ...props } />

            <main id='Home'>
                <div className={ 'bg' }>
                    <img className={ 'bg-img' } src={ Bg1 } alt="" />
                    <div className={ 'bg-text-box' }>
                        <div className={ 'bg-text' }>
                            <div
                                className={ 'bg-text1' }>
                                HYPER DOG
                            </div>
                            <div className={ 'bg-text2' }>
                                BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ 'pageContent' }>
                    <div className={ 'whatisHyperDog' }>
                        <div className={ 'title' }>
                            What is Hyper Dog ?
                        </div>
                        <div className={ 'text' }>
                            Born in the Web3 world, HyperDog is a collection of 10,000 unusually super-excited <br />
                            avatars with richly diverse rarity-backed features.<br />
                            Holding a vision of driving the universe HYPER, HyperDog is created for builders, artists,<br />
                            and pioneers of a decentralized future. Like dopamine, HYPER is spiritual energy<br />
                            generated by each of HyperDog to deliver optimism, passion, and creativity.<br />
                            Let’s go HYPER together! Let’s build together!
                        </div>
                    </div>
                </div>
                <div className={ 'pageContent' }>
                    <div className={ 'whatisHyperDog RoadmapHyperdog' }>
                        <div className={ 'title' }>
                            Roadmap 1.0 of Hyperdog
                        </div>
                        <div className={ 'view-Roadmap' }>
                            <div>
                                <div className={ 'view-Roadmap-subtitle' }>Pre-mint</div>
                                <ul className={ 'view-Roadmap-ul' }>
                                    <li className={ 'view-Roadmap-li' }>Create a great community, launching Discord and Twitter;</li>
                                    <li className={ 'view-Roadmap-li' }>Launch website and whitelist giveaways;</li>
                                    <li className={ 'view-Roadmap-li' }>10K NFTs are ready;</li>
                                    <li className={ 'view-Roadmap-li' }>Exclusive pre-sale discount for whitelisted members only;</li>
                                </ul>
                                <div className={ 'view-Roadmap-subtitle' }>Post-mint</div>
                                <ul className={ 'view-Roadmap-ul' }>
                                    <li className={ 'view-Roadmap-li' }>Launch secondary market listing;</li>
                                    <li className={ 'view-Roadmap-li' }>Open the shop, in which we create products with our own NFTs;</li>
                                    <li className={ 'view-Roadmap-li' }>Continuous meet-up events across the world with our NFT holders;</li>
                                    <li className={ 'view-Roadmap-li' }>Explore Hyperdog Metaverse with your own decentralized identity;</li>
                                    <li className={ 'view-Roadmap-li' }>List token and launch charity;</li>
                                </ul>
                            </div>
                            <div className={ 'view-Roadmap-img-box' }>
                                <img className={ 'view-Roadmap-img' } src={ Bg0 } alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ 'pageContent pageContent1' }>
                    <div className={ 'whatisHyperDog TheDoodlesFounders' }>
                        <div className={ 'title' }>
                            TheDoodlesFounders
                        </div>
                        <ul className={ 'df-ul' }>
                            { doodlesList.map(item =>
                                <li className={ 'df-list' } key={ item.name }>
                                    <div className={ 'df-img' }
                                         onMouseEnter={ () => setDoodlesListSeeDesc(item.name) }
                                         onMouseLeave={ () => setDoodlesListSeeDesc('') }
                                    >
                                        <img src={ item.img } alt="" />
                                        <div className={ `df-desc df-decs-h5-pc ${ doodlesListSeeDesc === item.name && 'df-desc1' }` }>
                                             { item.desc }
                                        </div>
                                    </div>
                                    <p className={ 'df-name' }>{ item.name }</p>
                                    <div className={ `df-desc df-decs-h5 ${ doodlesListSeeDesc === item.name && 'df-desc1' }` }>
                                        { item.desc }
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </main>

           <Footers />

        </Fragment>
}

export default withRouter(Index)
