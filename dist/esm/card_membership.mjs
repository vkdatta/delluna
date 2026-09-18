export const name="card_membership";
export const id="dl_13daae8e95964a82b04d";
export const url=new URL("../icons/card_membership.svg?v=0dd93f75146fcdd849d03b6490653e9f258d61282fb22643c6ac78e285532661",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
