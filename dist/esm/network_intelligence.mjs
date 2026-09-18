export const name="network_intelligence";
export const id="dl_a4911bf302cd4f47acd9";
export const url=new URL("../icons/N/network_intelligence.svg?v=4b037844a8f0de174e2dccaf3e44847cb185456d19baca174e4031ed2c6491be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
