import { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

const App = () => {
    const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

    useEffect(() => {
        const savedFeedback = localStorage.getItem('feedback');
        if (savedFeedback) {
            setFeedback(JSON.parse(savedFeedback));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);

    const updateFeedback = (feedbackType) => {
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1,
        }));
    };

    const resetFeedback = () => {
        setFeedback({ good: 0, neutral: 0, bad: 0 });
    };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100) || 0;

    return (
        <div>
            <Description />
            <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
            {totalFeedback > 0 ? (
                <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
            ) : (
                <Notification message="No feedback given yet" />
            )}
        </div>
    );
};

export default App;

