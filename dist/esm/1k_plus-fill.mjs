export const name="1k_plus-fill";
export const id="dl_fe3d26b10b016aeac8b8";
export const url=new URL("../icons/1k_plus-fill.svg?v=85029045e170429a430fac4d7e075c3d143e37ada9b2434927b3253c70d5a031",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
