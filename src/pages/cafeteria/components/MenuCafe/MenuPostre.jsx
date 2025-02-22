import { lazy, Suspense } from "react";
import { postresDatas } from "../../data/postresData";
import { SkeletoTarjetaCafe } from "./SkeletoTarjetaCafe";

const TarjetaCafe = lazy(() =>
    import('./TarjetaCafe').then(module => ({ default: module.TarjetaCafe }))
);
  

export const MenuPostre = () => {
  return (
    <>
      {postresDatas.map((postre) => (
        <Suspense key={postre.id} fallback={<SkeletoTarjetaCafe/>}>
          <TarjetaCafe
            imagen={postre.imagen}
            nombre={postre.nombrePostre}
            precio={postre.precios}
          />
        </Suspense>
      ))}
    </>
  );
};
