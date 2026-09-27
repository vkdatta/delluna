export const name="shades-fill";
export const id="dl_550c9f42382a9b506a1c";
export const url=new URL("../icons/shades-fill.svg?v=6ecb2525844a3da446b0b4290456b35e18820dd118c55141aaeaeae889764d1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
