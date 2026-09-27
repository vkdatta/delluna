export const name="picture_in_picture_large";
export const id="dl_1ce365262973fc9e2de2";
export const url=new URL("../icons/picture_in_picture_large.svg?v=48a724d0e86b7c7b6b0003b57b7cd8872708495ef53c93812569bb32e961b8ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
