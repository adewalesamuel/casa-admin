export function ErrorMessages(props) {
    return (
        <div  className="error-message col-12 col-md-8 col-xl-6" style={props.style}>
                <div className={props.className ?? ''}>
                    {props.children instanceof Array ? 
                      props.children.map((item, index) => {
                          return (
                              <div key={index} className="alert alert-danger my-1">
                                  {item}
                              </div>
                          )
                      }) : <small>{props.children}</small>
                    }
                </div>
        </div>
    )
    
}