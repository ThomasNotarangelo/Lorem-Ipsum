import "./App.css";
import Content from "./components/Content";

function App() {
  return (
    <div>
      <Content
        title={"Lorem"}
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, delectus mollitia ducimus porro fuga voluptates. Quam incidunt iste cum qui nobis accusantium eos. Adipisci earum fugit temporibus et illum iure."
        }
      />
      <Content
        title={"Ipsum"}
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis aperiam, natus saepe suscipit quo aut rerum aspernatur ad reprehenderit ipsa voluptatibus nesciunt rem quis magnam! Accusamus excepturi, ipsam commodi magni quidem assumenda perferendis nam in fugiat laudantium, minus illum? Asperiores repellat esse quasi quibusdam dolor, accusantium praesentium dolore quas porro, odio fugiat distinctio assumenda alias amet commodi cum soluta."
        }
      />
    </div>
  );
}

export default App;
