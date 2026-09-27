export const name="map-pin";
export const id="dl_973eda8355d1434a9f37";
export const url=new URL("../icons/map-pin.svg?v=443ece5e453e7e1c6b9e112c7584ebb386cc8d2b1030457702bac6a398ac74ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
