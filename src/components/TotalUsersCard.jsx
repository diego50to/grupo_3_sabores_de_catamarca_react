import { BeatLoader } from "react-spinners";
import { useGetData } from "../../hooks/useGetData";
import TotalCard from "./TotalCard";

function TotalUsersCard() {
  const { data, isLoading, error } = useGetData(
    "http://localhost:3000/api/users"
  );

  if (isLoading)
    return (
      <div className="card">
        <BeatLoader color="f86e31" />
      </div>
    );
  if (error)
    return (
      <div className="card">
        <p>{error}</p>
      </div>
    );

  return (
    <TotalCard
      titulo="Total de Usuarios"
      cifra={data.meta.count}
      icono="fa-users"
    />
  );
}

export default TotalUsersCard;
