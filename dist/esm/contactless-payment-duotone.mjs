export const name="contactless-payment-duotone";
export const id="dl_216f21ce053a473793d3";
export const url=new URL("../icons/contactless-payment-duotone.svg?v=4c2bede16b9b3de2031df994621b629ffce902d7cc64ed532fb31a451044e78b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
