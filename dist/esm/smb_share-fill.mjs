export const name="smb_share-fill";
export const id="dl_1ae8c43f1a97fa95f462";
export const url=new URL("../icons/smb_share-fill.svg?v=4a8a3ca090775f9ab04dbcd1fd4b58f58e8962d9d24de2d9d5bc2eb96f730468",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
