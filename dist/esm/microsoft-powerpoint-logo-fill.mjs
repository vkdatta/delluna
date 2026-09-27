export const name="microsoft-powerpoint-logo-fill";
export const id="dl_587ee1ce544d4850a304";
export const url=new URL("../icons/microsoft-powerpoint-logo-fill.svg?v=9769e05b019bd6cabd8056c71b1158604740a45a5329aaddce84e6bc5b00c32f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
