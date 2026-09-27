export const name="pipe-bold";
export const id="dl_f7aa31113e58472d8ca4";
export const url=new URL("../icons/pipe-bold.svg?v=0bfe316a5dbb8fe67a5f25c50fb2791dd8ed869a2bc89e44459985a1f7c8e6a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
