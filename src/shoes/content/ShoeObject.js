import CustomCard from "./CustomCard";
const ShoeObj = (objName,objSex,objSneakerImage,objCost,objSize) => {
    return(
    <div
          className="col-lg-3 col-md-6"
          style={{
            display: "flex",
          }}
        >
          <CustomCard
            sex={objSex+" "}
            title={objName}
            sneakerImage={objSneakerImage}
            cost={objCost +"$"}
            size = {objSize+""}
          />
        </div>)
  }

  export default ShoeObj;