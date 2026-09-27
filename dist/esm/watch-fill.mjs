export const name="watch-fill";
export const id="dl_30174122427f2153bbae";
export const url=new URL("../icons/watch-fill.svg?v=d2f54fe77ab70dfddf973c77e38a739d0b701e7a84b8f5f747af62a3fbbc18b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
