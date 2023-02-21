import { Typeahead } from "react-bootstrap-typeahead";
export const BuscarContacto = ({ options, setSelected }) => {
  return (
      <Typeahead
        id="basic-example"
        onChange={(selected) => setSelected(selected)}
        clearButton
        options={options}
        placeholder="Filtrar por nombre/correo"
        filterBy={['nombre', 'correo']}
        labelKey={(option) => `${option.nombre} ${option.apellido} ${option.correo}`}
        renderMenuItemChildren={(option) => (
          <div>
            {option.nombre}
            <div className="sub-text">{option.correo}</div>
          </div>
        )}
      />
  );
};
