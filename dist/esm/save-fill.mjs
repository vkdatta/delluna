export const name="save-fill";
export const id="dl_f688fab2d4dc4466aadb";
export const url=new URL("../icons/S/save-fill.svg?v=b93eb238ba71386b89f796fbebbfd3acee4d6d90c86cc7ede772543f1c97f846",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
