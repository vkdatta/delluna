export const name="plane_contrails";
export const id="dl_51e177e60695392942ea";
export const url=new URL("../icons/plane_contrails.svg?v=f1089002c33f02c42b88ac96ad620872c406bc0a63e8c44a7a4f06446e291ea3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
