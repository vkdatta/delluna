export const name="lucid_3-shield-half";
export const id="dl_0272d290ea414b918489";
export const url=new URL("../icons/lucid_3-shield-half.svg?v=cc65d3c21564d9b484cf0d207e0bf60fede19680b6756e2341e0e79e00cdd3f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
