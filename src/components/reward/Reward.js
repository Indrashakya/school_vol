import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Reward.css'

const Reward = () => {
    const Rewards = [{
        name: 'Chick-Fila',
        logo: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042013/chick-fil-a.png?itok=UvqtgDLP',
        amount: 100
    },
    {
        name: 'Mcdonalds',
        logo: 'https://blog.logomyway.com/wp-content/uploads/2017/01/mcdonalds-logo-1.jpg',
        amount: 50
    },
    {
        name: 'Chipotle',
        logo: 'https://1000logos.net/wp-content/uploads/2017/11/Emblem-Chipotle.jpg',
        amount: 150
    },
    ];

    function handleSubmit(e) {
        e.preventDefault();
        alert('You have redeemed a giftcard!');
    }

    return (
        <div>
            <h1 className="text-center reward-text">Rewards</h1>
            <div className="card-size">
                <div class="card">

                    <div className="container">

                        <div className="words-class">
                            <img src={Rewards[0].logo} className="cfa-img" alt="cfa logo"></img>
                            <h4><b>{Rewards[0].name} Gift Card</b></h4>
                            <p>{Rewards[0].amount} Points</p>
                        </div>
                        <div className="button-container">
                            <button className="btn btn-primary" onClick={handleSubmit}>Redeem</button>
                        </div>
                    </div>

                </div>
            </div>
            <div class="card">

                <div className="container">
                    <div className="words-class">
                        <img src={Rewards[1].logo} className="cfa-img" alt="cfa logo"></img>
                        <h4><b>{Rewards[1].name} Gift Card</b></h4>
                        <p>{Rewards[1].amount} Points</p>
                    </div>
                    <div className="button-container">
                        <button className="btn btn-primary" onClick={handleSubmit}>Redeem</button>
                    </div>
                </div>

            </div>
            <div class="card">

                <div className="container">
                    <div className="words-class">
                        <img src={Rewards[2].logo} className="cfa-img" alt="cfa logo"></img>
                        <h4><b>{Rewards[2].name} Gift Card</b></h4>
                        <p>{Rewards[2].amount} Points</p>
                    </div>
                    <div className="button-container">
                        <button className="btn btn-primary" onClick={handleSubmit} >Redeem</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Reward;
