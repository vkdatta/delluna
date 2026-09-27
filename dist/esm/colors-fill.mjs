export const name="colors-fill";
export const id="dl_d918381178ac17b7f9a3";
export const url=new URL("../icons/colors-fill.svg?v=67d7980548f3cbc0653b7dbda40327c00b6749ed606e8a33e7037c1fedc190cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
