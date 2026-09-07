export const name="soundcloud-logo-light";
export const id="dl_ea5f7849b15148bca5a3";
export const url=new URL("../icons/S/soundcloud-logo-light.svg?v=ad04fa6d972a5e5627d6074bef32a799034fb21ef40c3ba41766a112666ac690",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
