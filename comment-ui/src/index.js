import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Aaron" 
                    timeAgo="Today at 6:51PM" 
                    text="Nice blog post!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 4:45PM" 
                text="Nice blog post!" 
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Jack" 
                timeAgo="Today at 4:38PM" 
                text="Nice blog post!" 
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Sara" 
                timeAgo="Today at 11:03AM" 
                text="Nice blog post!" 
                avatar={faker.image.avatar()}
            />            
        </div>        
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));