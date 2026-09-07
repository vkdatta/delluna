export const name="seal-percent-light";
export const id="dl_75d3628c7428454594bb";
export const url=new URL("../icons/S/seal-percent-light.svg?v=5d886fdb16a5dc064ecafe3701d3d78baaa2afb22e2ec5aa73664baff0afd352",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
