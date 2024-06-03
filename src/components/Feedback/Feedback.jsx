const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
    return (
        <div>
            <h2>Feedback Statistics</h2>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total feedback: {totalFeedback}</p>
            <p>Positive feedback: {positiveFeedback}%</p>
        </div>
    );
};

export default Feedback;