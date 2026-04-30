
export default function ProjectCard({ title, details, image }) {
  return (
    <section className="index">
      <article className="articles">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <button className="portbutton">Demo</button>
        <h4>{details}</h4>
      </article>
    </section>
  );
}

