export const name="quick_reorder";
export const id="dl_970d91fe33b950859b1a";
export const url=new URL("../icons/quick_reorder.svg?v=bceaaaa8743dc7bdd44a2fae026bd3da606dacfd57563f84895a6e8666f3b529",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
