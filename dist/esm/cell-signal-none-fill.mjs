export const name="cell-signal-none-fill";
export const id="dl_43aed82101cd4c2095f4";
export const url=new URL("../icons/cell-signal-none-fill.svg?v=13e8a2d2248a9360c799f73c463461bc010fb7086b484f3d17de63ebb25dbd25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
