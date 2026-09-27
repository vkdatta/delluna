export const name="network-slash-fill";
export const id="dl_24e26c22309c46b595d3";
export const url=new URL("../icons/network-slash-fill.svg?v=5c37e14a8cef7d6f382876d1000f3bec3f5950c89de9c1f77abecdfbb722b600",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
