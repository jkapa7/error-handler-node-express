import PropTypes from "prop-types";

Title.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default function Title({ title, color }) {
  return (
    <>
      <h2
        className={
          color
            ? `font-extrabold text-title-h md:text-title-w ${color}`
            : "font-extrabold text-title-h md:text-title-w text-slate-700"
        }
      >
        {title}
      </h2>
    </>
  );
}
