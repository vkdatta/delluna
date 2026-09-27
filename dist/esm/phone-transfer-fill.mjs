export const name="phone-transfer-fill";
export const id="dl_df5081355222488b8a5c";
export const url=new URL("../icons/phone-transfer-fill.svg?v=6add2e85a76a2d8e756e33858a6c2070feea73dae1315b117064842abe08d741",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
