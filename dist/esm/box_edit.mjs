export const name="box_edit";
export const id="dl_ad1be98aa8749604519c";
export const url=new URL("../icons/box_edit.svg?v=e59212cb57de4bdc59ad80c4e2eeca8f7e3af7f6d0f2398c7cb8862215ab69c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
