export const name="card_membership-fill";
export const id="dl_3119d016065355e4cdde";
export const url=new URL("../icons/card_membership-fill.svg?v=b3468438534e9b555a5ce3971ccf123177950ee6e3e0b29dea1c69f04e8ea0cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
