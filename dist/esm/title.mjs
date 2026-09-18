export const name="title";
export const id="dl_d3b2bc439c694f5783ba";
export const url=new URL("../icons/title.svg?v=768947191bf315f3a51e2d08a14503b478ef4e7fafb973ca3cf84111cf3c61ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
