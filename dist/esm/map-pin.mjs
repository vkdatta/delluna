export const name="map-pin";
export const id="dl_973eda8355d1434a9f37";
export const url=new URL("../icons/map-pin.svg?v=523f024fa467fc285d95c1db4ed6c32b640513c79780d14310bebf342b6f94fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
