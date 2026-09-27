export const name="recycle-bold";
export const id="dl_ebe7a249ee25483d978a";
export const url=new URL("../icons/recycle-bold.svg?v=86b66ab44de85975fe240f89421d8739e29ef77a446204ece6acc28cd1c20ed3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
