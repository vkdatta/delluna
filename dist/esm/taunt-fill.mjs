export const name="taunt-fill";
export const id="dl_6d8995e6e395131c1bc8";
export const url=new URL("../icons/taunt-fill.svg?v=ad04c8a613d61a074b959df175db411234e7d18ad5c5862d273cb90dea42a17d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
