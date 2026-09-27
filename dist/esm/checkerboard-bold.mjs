export const name="checkerboard-bold";
export const id="dl_a21634a2e84b4938bbd1";
export const url=new URL("../icons/checkerboard-bold.svg?v=7baa91d80ead257ea27c7a2e9076da815183278cf39a4d60a59e549404469831",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
