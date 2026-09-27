export const name="list_alt_check-fill";
export const id="dl_8583b57a2e6f7cc29dad";
export const url=new URL("../icons/list_alt_check-fill.svg?v=5c32d07690f0ea64e897fe882b5e97c36db535ebb9723196bca47447fd932ae3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
