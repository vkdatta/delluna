export const name="stop-circle-bold";
export const id="dl_c639d3d2a7541cf811fa";
export const url=new URL("../icons/stop-circle-bold.svg?v=22ecfa66d4a75555d6a768516bf957f90e9396565215975a332c0e038f2ce041",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
