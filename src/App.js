import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Usuarios from "./Usuarios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
      links: ["usuarios", "productos", "contacto"],
      form: {
        nombre: "",
        apellido: "",
      },
      usuarios: [],
      indexEdit: -1,
    };
  }

  handleEditAndDelete = (i, action, user) => {
    if (action === "editar") {
      this.setState({
        form: {
          nombre: user.nombre,
          apellido: user.apellido,
        },
        indexEdit: +i,
      });
    } else {
      let start = this.state.usuarios.slice(0, i);
      let end = this.state.usuarios.slice(i + 1);
      let nuevos_usuarios = [...start, ...end];
      this.setState({
        form: {
          nombre: "",
          apellido: "",
        },
        usuarios: nuevos_usuarios,
      });
    }
  };

  manejarElSubmit = (e) => {
    e.preventDefault();

    if (this.state.indexEdit > -1) {
      let start = this.state.usuarios.slice(0, this.state.indexEdit);
      let end = this.state.usuarios.slice(this.state.indexEdit + 1);
      let nuevos_usuarios = [...start, ...end, this.state.form];
      this.setState({
        usuarios: nuevos_usuarios,
        form: {
          nombre: "",
          apellido: "",
        },
        indexEdit: -1,
      });
    } else { 
      this.setState({
        usuarios: [...this.state.usuarios, this.state.form],
        form: {
          nombre: "",
          apellido: "",
        },
      });
    }
  };

  handleChangeDataForm = (e, prop) => {
    let data = e.target.value;
    this.setState({
      form: {
        ...this.state.form,
        [prop]: data,
      },
    });
  };

  aumentarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  restarContador = () => {
    this.setState({ contador: this.state.contador - 1 });
  };

  resetearContador = () => {
    this.setState({ contador: 0 });
  };

  render() {
    let { links, contador, form, usuarios } = this.state;
    return (
      <>
        <Header links={links} />
        <Main
          contador={contador}
          aumentarContador={this.aumentarContador}
          restarContador={this.restarContador}
          resetearContador={this.resetearContador}
        />
        <Usuarios
          nombre={form.nombre}
          apellido={form.apellido}
          usuarios={usuarios}
          manejarElSubmit={this.manejarElSubmit}
          handleChangeDataForm={this.handleChangeDataForm}
          handleEditAndDelete={this.handleEditAndDelete}
        />
        <Footer />
      </>
    );
  }
}

export default App;
