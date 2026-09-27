export const name="fast_forward";
export const id="dl_92b84b3a7824e5d531e9";
export const url=new URL("../icons/fast_forward.svg?v=6194134ad9236c98f282809913a5527ec5d2b8dace9651e7141f9410e70c3b3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
