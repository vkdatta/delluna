export const name="plug-fill";
export const id="dl_afa861afa1214aa1a5cf";
export const url=new URL("../icons/plug-fill.svg?v=e23c9cb523d2435227aa5cd27941419d4437686e6557521932155b00fa99783e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
