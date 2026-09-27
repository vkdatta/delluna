export const name="map-pin-line-bold";
export const id="dl_787b4977ccc84d9e8621";
export const url=new URL("../icons/map-pin-line-bold.svg?v=16b8eb51bff144eeb50b248cc2d7d2c6158cf028647c7425e1c384353bff1bbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
