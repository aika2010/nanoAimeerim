import React from 'react'


function Question() {
    return (
        <div className='Question'>
            <div className="container ">
                <div className="Question__BigDiv">
                <h3 className='Question__title'>Как изменится жизнь вашего ребенка, <br />если он начнет изучать IT?</h3>
                <div className='Question__BigBlock'>
                    <div className='Question__industry'>
                        <p className='Question__world'>Попадает в <br /> индустрию, <br /> которая <br /> покоряет мир</p>
                    </div>
                    <div className='Question__creativity'>
                        <p className='Question__potential'>Максимально <br /> раскроет свой <br /> творческий <br /> потенциал</p>
                    </div>
                </div>
                <div className='Question__SmallBlock'>
                    <div className='Question__happiness'>
                        <p className='Question__life'>Обеспечивает <br /> себе в будущем <br /> счастливую <br /> жизнь</p>
                    </div>
                    <div className='Question__hobby'>
                        <p className='Question__work'>В будущем <br /> сделает <br /> хобби своей <br />работой</p>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Question
