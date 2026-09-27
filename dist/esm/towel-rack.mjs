export const name="towel-rack";
export const id="dl_908187b6a64d4e01816d";
export const url=new URL("../icons/towel-rack.svg?v=1886f8e8bb645e3f4807e4ff2a8f913a7399d6e3b9ba24498d61a24887f216f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
