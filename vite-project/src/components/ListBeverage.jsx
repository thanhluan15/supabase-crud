import React, { useEffect, useState } from "react";
import { supabase } from "../config/supabase";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function ListBeverage() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const retriveAll = async () => {
    const { data, error } = await supabase.storage
      .from("beverages")
      .list("public");
    console.log(data);
    setImages(data);
  };

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.storage
        .from("beverages")
        .remove([`public/${id}`]);
      console.log(id);
      navigate("/list");
      setImages((prev) => {
        return prev.filter((b) => b.name !== id);
      });
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  console.log(images);

  console.log(isLoading);

  useEffect(() => {
    retriveAll();
  }, []);
  return (
    <div className="image-list">
      {images.map((image) => {
        return (
          <div className="image-items">
            <img
              className="image-item"
              src={`https://mbzluisrzxmskyoiehjz.supabase.co/storage/v1/object/public/beverages/public/${image.name}`}
              alt=""
            />
            <Button variant="success">
              <BiEdit className="w-5 h-5 text-white" />
            </Button>
            <Button variant="danger" onClick={() => handleDelete(image.name)}>
              <AiFillDelete className="w-5 h-5 text-white" />
            </Button>
          </div>
        );
      })}

      <></>
    </div>
  );
}

export default ListBeverage;
