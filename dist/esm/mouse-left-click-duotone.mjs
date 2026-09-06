export const name="mouse-left-click-duotone";
export const id="dl_ec07f598361f4c41a232";
export const url=new URL("../icons/mouse-left-click-duotone.svg?v=106d273640f0bafc5c473a97dfd2a5aa182c15473b4b9f0656f81bf5ab9c61a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
