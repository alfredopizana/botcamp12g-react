import React from 'react'

function semaforoSelector(props){
    return(
        <>
            <input className="control" type="radio" name="etapa" value="siga" onClick={ this.setEtapa } />
          <label for="">Siga</label>
          <input className="control" type="radio" name="etapa" value="precaucion" onClick={ this.setEtapa } />
          <label for="">Precaucion</label>
          <input className="control" type="radio" name="etapa" value="alto" onClick={ this.setEtapa } />
          <label for="">alto</label>
        </>
    )
}
export default semaforoSelector