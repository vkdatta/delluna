export const name="mobile_rotate_lock-fill";
export const id="dl_fdd58ea2b29a4c339523";
export const url=new URL("../icons/mobile_rotate_lock-fill.svg?v=322f4745de2251ff150db27bff6ed457516508f870a2534653c59e7d6e8071d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
