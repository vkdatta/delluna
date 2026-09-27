export const name="binoculars-duotone";
export const id="dl_a5a85a733a4e4a80b46c";
export const url=new URL("../icons/binoculars-duotone.svg?v=3eb3853f8ab2d3c31ff1ba816dcad3fc1866365e926cd208a060f608043240b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
