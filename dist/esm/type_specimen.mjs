export const name="type_specimen";
export const id="dl_a000bf420abbc5833ae6";
export const url=new URL("../icons/type_specimen.svg?v=f22f7deb9c73686e0a0160854360c8b6c9f13a8858c1c7edcfb6dc30eb1962cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
