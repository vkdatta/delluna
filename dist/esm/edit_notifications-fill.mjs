export const name="edit_notifications-fill";
export const id="dl_a63ee1de267542fbb238";
export const url=new URL("../icons/edit_notifications-fill.svg?v=fcd90ab768761002644dd3879ee11e2d2b09fd66f2e79c9a76cbc17b75a6f7cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
