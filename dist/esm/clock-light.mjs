export const name="clock-light";
export const id="dl_09ca976ab99845a0a17e";
export const url=new URL("../icons/clock-light.svg?v=c07a3ca8d281ab978ac93c9b795f5b19832fffc713543cbf10a62a7c9e3d05df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
