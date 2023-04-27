import React from "react";

const Newsitem = (props) => {
  let { title, description, imageurl, newsurl, author, date, source } = props;
  return (
    <div style={{ border: `1px solid ${props.fcolor}` }}>
      <div
        className="card"
        style={{ color: `${props.fcolor}`, backgroundColor: `${props.bcolor}` }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            justifyContent: "flex-end",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger"> {source} </span>
        </div>
        <img
          src={imageurl}
          className="card-img-top"
          style={{ height: "12.5rem" }}
          alt="..."
           />
        <div className="card-body">
          <p className="card-text" style={{ display: "inline" }}>
            <small className="text-muted" style={{ display: "inline" }}>
              By {author} on {new Date(date).toUTCString()}
            </small>
          </p>

          <h5 className="card-title" style={{ marginTop: "15px" }}>
            {title}{" "}
          </h5>
          <p className="card-text">{description}</p>
          <a
            href={newsurl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
