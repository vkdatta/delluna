export const name="add_photo_alternate-fill";
export const id="dl_106fb7249dd58f4d6dc0";
export const url=new URL("../icons/add_photo_alternate-fill.svg?v=5a3350bf3ac0a5972b5b91a530827043b6a8068fa415e65565aacd7b82d0faa9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
