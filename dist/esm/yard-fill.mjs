export const name="yard-fill";
export const id="dl_c0d5a07d1c3893a0ebb3";
export const url=new URL("../icons/yard-fill.svg?v=a77e16e3d1636bef113a8d58a6e8ef6aad81b61b87374ebcbd964e33a7e8e19e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
