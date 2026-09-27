export const name="network-bold";
export const id="dl_73f9f3cad2d0490a8946";
export const url=new URL("../icons/network-bold.svg?v=7d702fc2b3d2674fd3bc5511e59e7fbd2d10f2007e14b30804dc6c30454f5970",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
