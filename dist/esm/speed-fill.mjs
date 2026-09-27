export const name="speed-fill";
export const id="dl_c863c0b3c76605693bd3";
export const url=new URL("../icons/speed-fill.svg?v=ec8bf348bb2f7b53f088fa23d57b8e31f3fdea846099eef01e191853a21ad235",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
