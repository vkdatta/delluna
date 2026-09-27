export const name="mobile_rotate_lock-fill";
export const id="dl_2584e55a72e4263cfa93";
export const url=new URL("../icons/mobile_rotate_lock-fill.svg?v=e7881985b09c4a5dc977a365c06d4df3951bc3bfa9da4db461c8edbf30067c35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
