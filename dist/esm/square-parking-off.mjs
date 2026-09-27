export const name="square-parking-off";
export const id="dl_283f7da5408a4df0a763";
export const url=new URL("../icons/square-parking-off.svg?v=10418c701632ebeffcf9cfa36de9ab5c930b9d003a7ba7cebd52f062f53cdf14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
