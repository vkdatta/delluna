export const name="iron-fill";
export const id="dl_cd05cbb654f7da021df4";
export const url=new URL("../icons/iron-fill.svg?v=b37cd31b7dd81b9a77cb2966a1684d9dca4f3368ca55e5cf7b54ad091ab8e353",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
