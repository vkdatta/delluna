export const name="policy-fill";
export const id="dl_c20bfdb70847433cb16e";
export const url=new URL("../icons/policy-fill.svg?v=f9cb2ad3b7853117fc1abc73b7a09562aac2f7d0c5d038f6e25a36c0cd0739ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
