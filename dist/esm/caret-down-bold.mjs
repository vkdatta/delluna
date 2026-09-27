export const name="caret-down-bold";
export const id="dl_497dd877f90d4461b8df";
export const url=new URL("../icons/caret-down-bold.svg?v=2870d92ab8d04d657004a4aa38e2329fc604bb395715093daff927a2ad7a0a85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
