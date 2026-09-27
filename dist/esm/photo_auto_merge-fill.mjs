export const name="photo_auto_merge-fill";
export const id="dl_bafe0182c5c26cd66ceb";
export const url=new URL("../icons/photo_auto_merge-fill.svg?v=a2f1580b9a577c01d52400c8b94822563fae23504cfa850d810abc2081928120",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
