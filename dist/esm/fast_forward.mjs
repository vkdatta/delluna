export const name="fast_forward";
export const id="dl_3d1df5be61a03b6705ea";
export const url=new URL("../icons/fast_forward.svg?v=aecc464cabde8d2e54036d845efa4132baf38ed915409a95284179d391380509",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
