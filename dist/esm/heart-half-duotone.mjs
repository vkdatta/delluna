export const name="heart-half-duotone";
export const id="dl_b321d81119844a57a5a1";
export const url=new URL("../icons/heart-half-duotone.svg?v=d91538f9628b50843c1f6737411bd4b33d3aadf1128749579189ce5e3b2b53a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
