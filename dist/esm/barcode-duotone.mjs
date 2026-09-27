export const name="barcode-duotone";
export const id="dl_24fe801fbfc4429b9bdc";
export const url=new URL("../icons/barcode-duotone.svg?v=42334dc1f7049f19259056a3482d770a0d1dcd92372f0b131fc65a0e14d94b86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
