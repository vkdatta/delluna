export const name="lucid_1-arrow-down-a-z";
export const id="dl_539d9cd79e1740d3bde5";
export const url=new URL("../icons/lucid_1-arrow-down-a-z.svg?v=96867e374306c742b5eb116e726b6b9fa40033c52a0969cf36148f5556926903",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
