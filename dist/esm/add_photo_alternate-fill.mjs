export const name="add_photo_alternate-fill";
export const id="dl_dd6950eae73fa0259dc7";
export const url=new URL("../icons/add_photo_alternate-fill.svg?v=ad23699d37792c81d4fe3ca798770a13ccf6c3b50cb82b46846bd99fb6ff7187",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
