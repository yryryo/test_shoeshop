import React from "react";
import {useParams} from "react-router-dom";

function Detail(props){
  let {id} = useParams(); //유저가 URL에 입력한 params
  let f_id = props.shoes.find((x)=>x.id == id);

    return (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={"https://codingapple1.github.io/shop/shoes"+f_id+".jpg"}
                width="100%"
              />
            </div>
            <div className="col-md-6">
              <h4 className="pt-5">{f_id.title}</h4>
              <p>{f_id.content}</p>
              <p>{f_id.price}</p>
              <button className="btn btn-danger">주문하기</button>
            </div>
          </div>
        </div>
      );
}


export default Detail;
