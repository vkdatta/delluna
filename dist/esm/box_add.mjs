export const name="box_add";
export const id="dl_48ffd9221cdff95a2473";
export const url=new URL("../icons/box_add.svg?v=a58a7d504f76d62a765a7822d06d4cc041733ab965d2a5d5d473555e176ba59b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
