export const name="arrow-right-fill";
export const id="dl_a75bb8350f424fd48b1e";
export const url=new URL("../icons/arrow-right-fill.svg?v=472ed7427466f54c1d7e08497593aa422c495290d9f0ef075af38d1f7e627654",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
