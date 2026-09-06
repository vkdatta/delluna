export const name="checkerboard-fill";
export const id="dl_e6ce34ea25ea46cb8ffb";
export const url=new URL("../icons/checkerboard-fill.svg?v=7dcd3dae3c9fc5be138786f1fb67c8a7abe87f14b146163553366dcf5e1f6a9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
