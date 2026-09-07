export const name="soundcloud-logo-fill";
export const id="dl_e7a2650777b94df38599";
export const url=new URL("../icons/S/soundcloud-logo-fill.svg?v=c5d40ce81e6c35ac14c6c958b49cf90f43e870f637367b44bdf39ed45a12b073",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
