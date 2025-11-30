import Apresentation from "../components/apresentation";
import Projects from "../components/projects";
import Rodape from "../components/rodape";
import Skills from "../components/skils";

export default function Home() {
    return (
        <div>

            <section id="inicio">
                <Apresentation />
            </section>

            <section id="sobre">
                <Skills />
            </section>

            <section id="projetos">
                <Projects />
            </section>

            <section id="contato">
                <Rodape />
            </section>

        </div>
    );
}
