export const name="swipe_down";
export const id="dl_8a178416e707ace69f5b";
export const url=new URL("../icons/swipe_down.svg?v=fd59f5d6f1547b11924ac75a60b0a0b8225918237fe38ef891cdef226d805bda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
