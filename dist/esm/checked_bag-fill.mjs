export const name="checked_bag-fill";
export const id="dl_18faf5e34084ef02f473";
export const url=new URL("../icons/checked_bag-fill.svg?v=7886208d67d3c3afaa55a852778850fb0e082f73a33c278dccbff305f3cae220",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
