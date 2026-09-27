export const name="plug-fill";
export const id="dl_afa861afa1214aa1a5cf";
export const url=new URL("../icons/plug-fill.svg?v=af1c923815b9cbc5da8c77066bcb9dfa6ac28799227be1877293e7f78024f3ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
