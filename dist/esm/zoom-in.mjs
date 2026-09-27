export const name="zoom-in";
export const id="dl_614dc6b10a5549b6b705";
export const url=new URL("../icons/zoom-in.svg?v=d249a2072b31e3719182f06a17a0a63cc01fe9ee7ee71f63e0ba0a660d603426",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
