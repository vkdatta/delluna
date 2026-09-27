export const name="binoculars-duotone";
export const id="dl_a5a85a733a4e4a80b46c";
export const url=new URL("../icons/binoculars-duotone.svg?v=444f83323d0c28ab4b9483f512c31113b8b42f86c97344953c5db1d12ca7af11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
