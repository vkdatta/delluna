export const name="massage";
export const id="dl_19c6368da7f04b96be53";
export const url=new URL("../icons/massage.svg?v=3abc878bbbd96c13e5943b92b2a3c2b86326b2859750d91d09828a999bf56b52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
