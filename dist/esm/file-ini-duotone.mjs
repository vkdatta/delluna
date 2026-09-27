export const name="file-ini-duotone";
export const id="dl_87b7c59adc9d40c6a95b";
export const url=new URL("../icons/file-ini-duotone.svg?v=c1bb3803e88d19284f5d838762f192966b11678a5d35166db42853d0551fa21e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
