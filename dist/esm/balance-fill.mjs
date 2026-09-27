export const name="balance-fill";
export const id="dl_46bda5e10a3129175055";
export const url=new URL("../icons/balance-fill.svg?v=4241870692226a1772691bf61a09f5028167e34bd2a96a8d2fde6b708f19b662",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
