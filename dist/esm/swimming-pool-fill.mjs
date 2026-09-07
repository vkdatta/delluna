export const name="swimming-pool-fill";
export const id="dl_356e1ba7f0a94757b4ab";
export const url=new URL("../icons/S/swimming-pool-fill.svg?v=f7624738855fd49e79fb24e103ad5f14672c36c8a4dd44e713e7a5f00176625c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
