import { Component } from 'react';

import { Section } from './Section/Section';
import { Buttons } from './Buttons/Buttons';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

import css from './FeedbackList.module.css';

export class FeedbackList extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickButton = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  //  Сума загальних відгуків
  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  // Відсоток позитивних відгуків
  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback > 0
      ? Math.round((this.state.good / totalFeedback) * 100)
      : 0;
  };

  render() {
    const keys = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();

    return (
      <div>
        <h1 className={css.title}>Please leave feedback</h1>

        <Section title="Feedback Options">
          <Buttons keys={keys} onClickButton={this.onClickButton} />
        </Section>

        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
