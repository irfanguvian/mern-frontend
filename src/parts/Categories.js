import React from "react";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";
export default function Categories({ data }) {
  return data.map((category, index) => {
    if (category.itemId.length === 0) return null;
    return (
      <section className="container" key={`category-${index}`}>
        <Fade bottom>
          <h4 className="mb-3 fw-medium">{category.name}</h4>
          <div className="container-grid">
            {category.itemId.map((item, index2) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`category-${index}-item-${index2}`}
                >
                  <Fade bottom delay={300 * index2}>
                    <div className="card">
                      {item.isPopular && (
                        <div className="tag">
                          Popular <span className="fw-light">Choice</span>
                        </div>
                      )}
                      <figure className="img-wrapper" style={{ height: 180 }}>
                        <img
                          src={`http://localhost:5000/${item.imageId[0].imageUrl}`}
                          alt={item.title}
                          className="img-cover"
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <Button
                          type="link"
                          className="stretched-link d-block text-gray-800"
                          href={`/properties/${item._id}`}
                        >
                          <h5 className="h4">{item.title}</h5>
                        </Button>
                        <span className="text-gray-500">
                          {item.city}, {item.country}
                        </span>
                      </div>
                    </div>
                  </Fade>
                </div>
              );
            })}
          </div>
        </Fade>
      </section>
    );
  });
}
