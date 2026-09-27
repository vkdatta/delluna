export const name="map-pin-line-bold";
export const id="dl_787b4977ccc84d9e8621";
export const url=new URL("../icons/map-pin-line-bold.svg?v=89d70d6c5d673e7b8a8370167963de7d1a775c7d04f7deb3fe13fe31e062672e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
