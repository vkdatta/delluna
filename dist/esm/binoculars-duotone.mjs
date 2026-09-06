export const name="binoculars-duotone";
export const id="dl_a5a85a733a4e4a80b46c";
export const url=new URL("../icons/binoculars-duotone.svg?v=8fb8e2b85f5005e340a3ee99d9142a3d04943f601a227f13c3da6c6382b763dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
