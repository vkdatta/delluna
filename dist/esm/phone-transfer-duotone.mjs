export const name="phone-transfer-duotone";
export const id="dl_9f2552c20df1416fb9a1";
export const url=new URL("../icons/phone-transfer-duotone.svg?v=41fd7b4ca3bdb8263802176e50419cd9a5b4d455c49f0c87bc5c5e371ce05e03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
