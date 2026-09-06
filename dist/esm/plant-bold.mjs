export const name="plant-bold";
export const id="dl_48192036849648d88258";
export const url=new URL("../icons/plant-bold.svg?v=143a65da1f30e54f7503c837def6e2c3356b7d21d34b857c76176353bc41a4e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
