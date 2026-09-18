export const name="shelf_auto_hide";
export const id="dl_3dc25ccd06d34434a775";
export const url=new URL("../icons/S/shelf_auto_hide.svg?v=3822f5585bd743070bc7ef6bd868aad3482f82464ab3b457a095ba6858fd579c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
