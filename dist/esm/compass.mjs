export const name="compass";
export const id="dl_dbe3efeb59d7452780a9";
export const url=new URL("../icons/compass.svg?v=00c7e42415f795fcea90bd9dc0b2c8266b4e9601d2937cb122cd03b7e9e9e198",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
