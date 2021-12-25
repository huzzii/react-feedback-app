import React, {useState} from 'react'
import Card from '../shared/Card';

function FeedbackForm() {
    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value);
    }
    return (
        <Card>
            <form>
                <h4>How would you rate your service with us?</h4>
                <div className="input-group">
                    <input type="text" placeholder='Enter a review' onChange={handleTextChange}/>
                    <button className='btn btn-primary'>CLICK</button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm
