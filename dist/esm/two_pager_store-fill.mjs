export const name="two_pager_store-fill";
export const id="dl_06d60106bc322d1ea487";
export const url=new URL("../icons/two_pager_store-fill.svg?v=a8d77112b3fc66b279edbc8c443d2b83064f38116f34460c774ec99db55344c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
