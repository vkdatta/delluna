export const name="shield-fill";
export const id="dl_eab16cf09f0484432cd1";
export const url=new URL("../icons/shield-fill.svg?v=0a41e92bd6dd5d7d3c4fb67377244ec8a06a733bff0def3c0baaff749e806a07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
