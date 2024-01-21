import Button from "../Button/Button.jsx";
import "./EntryForm.css";

export default function EntryForm() {
  return (
    <form className="entry-form">
      <h2 className="entry-form__title">Entry Form</h2>
      <div className="entry-form-fields">
        <div className="entry-form__field">
          <label htmlFor="motto">Motto</label>
          <input type="text" name="motto" id="motto" />
        </div>
        <div className="entry-form__field">
          <label htmlFor="notes">Notes</label>
          <textarea name="notes" id="notes" rows="4"></textarea>
        </div>
      </div>
      <div className="entry-form__button">
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
}
