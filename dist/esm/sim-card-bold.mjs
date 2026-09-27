export const name="sim-card-bold";
export const id="dl_0a62665dbf3d8e6fe9e6";
export const url=new URL("../icons/sim-card-bold.svg?v=ef2e29d3f67fcc54b0fa0aeb76674dc7eecdcbb32845a1a8336b0be1e55bb754",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
