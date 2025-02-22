import { lazy, Suspense } from "react";
import { cafeData } from "../../data/cafeData";
import { SkeletoTarjetaCafe } from "./SkeletoTarjetaCafe";

const TarjetaCafe = lazy(() =>
    import('./TarjetaCafe').then(module => ({ default: module.TarjetaCafe }))
);
  

export const MenuCafe = () => {
  return (
    <>
      {cafeData.map((cafe) => (
        <Suspense key={cafe.id} fallback={<SkeletoTarjetaCafe/>}>
          <TarjetaCafe
            imagen={cafe.imagen}
            nombre={cafe.nombreCafe}
            precio={cafe.precios}
          />
        </Suspense>
      ))}
    </>
  );
};
