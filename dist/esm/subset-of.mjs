export const name="subset-of";
export const id="dl_d388547aef8f380a4f50";
export const url=new URL("../icons/subset-of.svg?v=b6705322e458bbaa1d24709a66b92f43006474dd822b284f164dcb92375a1bc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
