export const name="outlet";
export const id="dl_544939b0304b709907aa";
export const url=new URL("../icons/outlet.svg?v=9b63524b6c60ce52e608549d3273f9c57b8348e541b42b9888725d83c07147aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
