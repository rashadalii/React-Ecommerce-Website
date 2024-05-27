import React, { useState } from "react";
import { useParams } from "react-router-dom";
import blogList from "../utilis/blogdata";
import PageHeader from "../components/PageHeader";
import Tags from "../shop/Tags";
import PopularPost from "../shop/PopularPost";

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

export const SingleBlog = () => {
  const [blog, setblog] = useState(blogList);
  const { id } = useParams();
  //   console.log(id);
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);
  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"blog/ Blog Details"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center  g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((vaL, i) => (
                                      <li key={i}>
                                        <i className={vaL.iconName}></i>
                                        {vaL.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Serenity had air taken pro season enter sing
                                  these sweet morning song Lorem ipsum dolor sit
                                  amet consectetur adipisicing elit. Illum nihil
                                  beatae cupiditate? Aspernatur aliquid
                                  voluptatibus excepturi enim placeat quas nihil
                                  minima commodi, praesentium soluta id
                                  accusamus ad hic quia omnis magni, voluptates
                                  consequuntur quidem laboriosam dolorum sint
                                  sapiente quis itaque impedit. Illum sapiente
                                  in odit eveniet numquam accusamus rem eum.
                                </p>
                                <blockquote>
                                  <p>
                                    Dynamically receptialize distributed
                                    technologies is wherease Lorem ipsum dolor
                                    sit amet consectetur adipisicing elit.
                                    Dolorum minus quo eveniet ex, dolorem nam
                                    porro commodi quibusdam placeat sunt.
                                  </p>
                                  <cite>
                                    <a href="#">...Melissa Hunter</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  whole heart create an alones and feel charm of
                                  exstencath Lorem ipsum dolor sit amet
                                  consectetur adipisicing elit. Sequi pariatur
                                  voluptatem nulla? Cum aut, quisquam id,
                                  pariatur officiis iure nesciunt adipisci
                                  dolores magni eius iusto reiciendis ipsam,
                                  illo autem! Eum, numquam perferendis. Quae
                                  beatae, mollitia cupiditate nostrum optio
                                  aspernatur aut.
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />
                                <p>
                                  Serenity has ari season ding enter song these
                                  sweet morning Lorem ipsum dolor sit amet
                                  consectetur adipisicing elit. Facilis
                                  molestiae sit culpa debitis quos in ut commodi
                                  voluptates cumque eligendi non provident et,
                                  eos, excepturi sapiente. Aliquid, nam?
                                  Aspernatur officia aperiam error, quibusdam
                                  iste sequi tenetur enim, voluptates animi
                                  debitis ipsa dolorum eius iusto consequatur
                                  odit nobis ea fugiat magnam.
                                </p>
                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://www.youtube.com/watch?v=9K8FbIKXkbw"
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>

                                <p>
                                  whole heart create an alones and feel Lorem
                                  ipsum dolor sit, amet consectetur adipisicing
                                  elit. Eligendi nulla, voluptas ipsum
                                  dignissimos eius veniam consequuntur minima
                                  esse cumque corrupti pariatur dicta soluta,
                                  aperiam sunt aliquam id fugiat excepturi
                                  mollitia saepe fuga? Alias suscipit dolorum
                                  id, nostrum laborum ab corporis necessitatibus
                                  illo, autem rerum odio ut saepe, voluptates
                                  perferendis illum.
                                </p>
                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((vaL, i) => (
                                      <li key={i}>
                                        <a href="#" className={vaL.className}>
                                          <i className={vaL.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="navigations-part">
                      <div className="left">
                        <a href="#" className="prev">
                          <i className="icofont-double-left"></i>
                          Previous Blog
                        </a>
                        <a href="#" className="title">
                          Evisculate Parallel Processes via Technica Sound
                          Models Authoritative
                        </a>
                      </div>
                      <div className="right">
                        <a href="#" className="prev">
                          <i className="icofont-double-right"></i>
                          Next Blog
                        </a>
                        <a href="#" className="title">
                          Evisculate Parallel Processes via Technica Sound
                          Models Authoritative
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
