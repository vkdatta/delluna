export const name="gps";
export const id="dl_e7a5365f7799496da3c1";
export const url=new URL("../icons/gps.svg?v=660f63f1374c0a64a04bb96dab60023fb895f4789765a5d7930c64056539d24f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
