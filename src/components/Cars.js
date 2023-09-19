function Car(props) {

  // console.log(props)

  return (
    <div className="details" style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>
      <p>Marque: { props.children }</p>
      <p>Couleur: { props.color ? props.color : "Aucune" }</p>
    </div>
  )
}

export default Car;
