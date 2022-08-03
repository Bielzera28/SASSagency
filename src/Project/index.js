import "./sass/styles.sass";

function Project() {
  return (
    <div>
      <header id="main-banner">
        <div className="nav-container">
          <a href="/" className="brand">
            <i className="fas fa-brain"></i> Agency
          </a>
          <nav>
            <ul className="nav-container-navbar">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Serviços</a>
              </li>
              <li>
                <a href="/">Contato</a>
              </li>
              <li>
                <a href="/" className="btn btn-primary">
                  Entrar
                </a>
              </li>
              <li>
                <a href="/" className="btn">
                  Registrar
                </a>
              </li>
            </ul>
          </nav>
          <i className="fas fa-bars"></i>
        </div>
        <div className="title-container">
            <h2>Nós desenvolvemos</h2>
            <h1> Poderosas Experiências</h1>
            <a href="/" className="btn btn-primary btn rounded">Fazer Orçamento</a>
        </div>
      </header>
      <main className="services-container">
        <h2>O que fazemos</h2>
        <div className="services-card-container">
          <div className="services-card">
            <i className="fab fa-buffer"></i>
            <h3>Desenvolvimento Full Stack</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis harum tempore eaque aliquid. Asperiores quisquam
              voluptas praesentium doloribus expedita ea non sunt, distinctio
              possimus, consequuntur laudantium dicta officiis dignissimos odit.
            </p>
          </div>
          <div className="services-card">
            <i className="fas fa-bolt"></i>
            <h3>Sites leves e rápidos</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis harum tempore eaque aliquid. Asperiores quisquam
              voluptas praesentium doloribus expedita ea non sunt, distinctio
              possimus, consequuntur laudantium dicta officiis dignissimos odit.
            </p>
          </div>
          <div className="services-card">
            <i className="fas fa-cart-plus"></i>
            <h3>E-commerces</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis harum tempore eaque aliquid. Asperiores quisquam
              voluptas praesentium doloribus expedita ea non sunt, distinctio
              possimus, consequuntur laudantium dicta officiis dignissimos odit.
            </p>
          </div>
          <div className="services-card">
            <i className="fas fa-chart-line"></i>
            <h3>SEO</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis harum tempore eaque aliquid. Asperiores quisquam
              voluptas praesentium doloribus expedita ea non sunt, distinctio
              possimus, consequuntur laudantium dicta officiis dignissimos odit.
            </p>
          </div>
          <div className="services-card">
            <i className="fas fa-chess-pawn"></i>
            <h3>Estratégias de Marketing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis harum tempore eaque aliquid. Asperiores quisquam
              voluptas praesentium doloribus expedita ea non sunt, distinctio
              possimus, consequuntur laudantium dicta officiis dignissimos odit.
            </p>
          </div>
          <div className="services-card">
            <i className="fas fa-cloud"></i>
            <h3>Hospedagem AWS/Azure</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis harum tempore eaque aliquid. Asperiores quisquam
              voluptas praesentium doloribus expedita ea non sunt, distinctio
              possimus, consequuntur laudantium dicta officiis dignissimos odit.
            </p>
          </div>
        </div>
        <a href="/" className="btn btn-primary btn-rounded">
          Veja todos os Serviços
        </a>
      </main>
      <div className="jobs-container">
        <h2>Alguns de nossos trabalhos</h2>
        <div className="jobs-list">
          <div className="first-job" id="job1">
            <div className="job-card-cover">
              <p className="job-card-title">Projeto 1</p>
              <p className="job-card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                amet maxime nostrum quaerat. Nihil officia similique excepturi
                voluptas perspiciatis, odit veritatis cum, dolores adipisci
                deserunt deleniti nemo repellendus optio eius.
              </p>
            </div>
          </div>
          <div className="other-jobs-container">
            <div className="job-card" id="job2">
              <div className="job-card-cover">
                <p className="job-card-title">Projeto 2</p>
                <p className="job-card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque amet maxime nostrum quaerat. Nihil officia similique
                  excepturi voluptas perspiciatis, odit veritatis cum, dolores
                  adipisci deserunt deleniti nemo repellendus optio eius.
                </p>
              </div>
            </div>
            <div className="job-card" id="job3">
              <div className="job-card-cover">
                <p className="job-card-title">Projeto 3</p>
                <p className="job-card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque amet maxime nostrum quaerat. Nihil officia similique
                  excepturi voluptas perspiciatis, odit veritatis cum, dolores
                  adipisci deserunt deleniti nemo repellendus optio eius.
                </p>
              </div>
            </div>
            <div className="job-card" id="job4">
              <div className="job-card-cover">
                <p className="job-card-title">Projeto 4</p>
                <p className="job-card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque amet maxime nostrum quaerat. Nihil officia similique
                  excepturi voluptas perspiciatis, odit veritatis cum, dolores
                  adipisci deserunt deleniti nemo repellendus optio eius.
                </p>
              </div>
            </div>
            <div className="job-card" id="job5">
              <div className="job-card-cover">
                <p className="job-card-title">Projeto 5</p>
                <p className="job-card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque amet maxime nostrum quaerat. Nihil officia similique
                  excepturi voluptas perspiciatis, odit veritatis cum, dolores
                  adipisci deserunt deleniti nemo repellendus optio eius.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-container">
          <div className="footer-desc-container">
            <h3 className="footer-title">Agency</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              quibusdam obcaecati dolorem libero, dolor eveniet, pariatur
              tenetur quisquam dicta nulla facilis impedit ad omnis magnam iusto
              ipsam architecto! Recusandae, dolore?
            </p>
          </div>
          <div className="footer-links-container">
            <div className="footer-links-container-list">
                <p className="footer-title">Links</p>
                <ul>
                    <li>
                        <a href="/">Base de conhecimentos</a>
                    </li>
                    <li>
                        <a href="/">Trabalhe Conosco</a>
                    </li>
                    <li>
                        <a href="/">Últimos Projetos</a>
                    </li>
                    <li>
                        <a href="/">Política de Privacidade</a>
                    </li>
                    <li>
                        <a href="/">Contato</a>
                    </li>
                </ul>
            </div>
            <div className="footer-links-container-list">
                <p className="footer-title">Links</p>
                <ul>
                    <li>
                        <a href="/">Base de conhecimentos</a>
                    </li>
                    <li>
                        <a href="/">Trabalhe Conosco</a>
                    </li>
                    <li>
                        <a href="/">Últimos Projetos</a>
                    </li>
                    <li>
                        <a href="/">Política de Privacidade</a>
                    </li>
                    <li>
                        <a href="/">Contato</a>
                    </li>
                </ul>
            </div>
            <div className="footer-links-container-list">
                <p className="footer-title">Links</p>
                <ul>
                    <li>
                        <a href="/">Base de conhecimentos</a>
                    </li>
                    <li>
                        <a href="/">Trabalhe Conosco</a>
                    </li>
                    <li>
                        <a href="/">Últimos Projetos</a>
                    </li>
                    <li>
                        <a href="/">Política de Privacidade</a>
                    </li>
                    <li>
                        <a href="/">Contato</a>
                    </li>
                </ul>
            </div>
          </div>
          <div className="footer-copy-right-container">
            <p>&copy; 2021 Agency</p>
            <p>A melhor agência web para seus projetos</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Project;
