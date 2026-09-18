export const name="child_care";
export const id="dl_97ec5d6e61a0462ba41c";
export const url=new URL("../icons/child_care.svg?v=92ba08bb4ac60a42422720e9f942faf7334a96dc787e754459aa8615ee6df10a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
