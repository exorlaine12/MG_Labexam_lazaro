import { useRef} from "react";
import type{FormEvent} from 'react';
function EventFeedback() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const feedbackRef = useRef<HTMLTextAreaElement>(null);

  const handleUncontrolledSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (nameRef.current && emailRef.current && feedbackRef.current) {
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const feedback = feedbackRef.current.value;

      console.log({ name, email, feedback });
      alert("Thank you for your feedback!");
    }
  };

  return (
    <div className="form-container">
    <form onSubmit={handleUncontrolledSubmit}>
      <h2>Event Feedback</h2>

      <input ref={nameRef} type="text" placeholder="Name" />
      <input ref={emailRef} type="email" placeholder="Email" />
      <textarea ref={feedbackRef} placeholder="Your feedback..." />

      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default EventFeedback;