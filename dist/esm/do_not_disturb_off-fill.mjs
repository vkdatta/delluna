export const name="do_not_disturb_off-fill";
export const id="dl_66f5a88457f6cb824deb";
export const url=new URL("../icons/do_not_disturb_off-fill.svg?v=4827fb7bf663730cdc86da1f4f86ef2d5dca32c5a1926c67c074b5bca95ad85a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
