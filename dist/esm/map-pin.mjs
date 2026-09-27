export const name="map-pin";
export const id="dl_973eda8355d1434a9f37";
export const url=new URL("../icons/map-pin.svg?v=bfaec90fbce5a6554a79246c19338172c11020c66b48b9c0aa29ffaba644b8bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
