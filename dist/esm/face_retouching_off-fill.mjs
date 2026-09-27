export const name="face_retouching_off-fill";
export const id="dl_b87c67e10e8a20680b7e";
export const url=new URL("../icons/face_retouching_off-fill.svg?v=37ed30157a252abdf8cdf232125daa793ec078c6092baaadb55b8b8891763e1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
