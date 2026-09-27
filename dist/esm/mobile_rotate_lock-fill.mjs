export const name="mobile_rotate_lock-fill";
export const id="dl_8d9a7f3c3e6d73fa088d";
export const url=new URL("../icons/mobile_rotate_lock-fill.svg?v=453e4a8098487395d3bd2968544cddbc0ebce683e49dfd0c32de23e72ec3a6ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
