export const name="sort_alt";
export const id="dl_106634ad91e0ea01a2bf";
export const url=new URL("../icons/sort_alt.svg?v=d14da891ee9678b32e848eb748fe70397d3d08701bc80119432f1e8f187e0ff7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
