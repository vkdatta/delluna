export const name="mobile_share";
export const id="dl_659609c6aa7bd3bffc66";
export const url=new URL("../icons/mobile_share.svg?v=493121717b0f99ca168792c95e842a59ab7b2f68fa4ba582c83c40ab76de6593",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
