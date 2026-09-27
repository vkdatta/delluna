export const name="arrow_and_edge";
export const id="dl_7709a1302968d589334c";
export const url=new URL("../icons/arrow_and_edge.svg?v=8aa0be5bb66e9354a0e2195939006eb2e7a14e52f04259969bcb563a2e84e28f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
