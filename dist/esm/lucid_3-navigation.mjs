export const name="lucid_3-navigation";
export const id="dl_0bdea1773f4c47efb4ba";
export const url=new URL("../icons/lucid_3-navigation.svg?v=b9e7684b23d8ec9fa0b04a3bc3090901e726d0d33591be45b1a3be11264b6017",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
