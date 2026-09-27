export const name="phone-transfer-duotone";
export const id="dl_9f2552c20df1416fb9a1";
export const url=new URL("../icons/phone-transfer-duotone.svg?v=2114a1b0543d1276386c04320b0ed4c0881f5c9737152d0e9e958a8189f2d04a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
