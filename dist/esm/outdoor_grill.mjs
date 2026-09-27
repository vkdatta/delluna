export const name="outdoor_grill";
export const id="dl_bbed4420a87086586920";
export const url=new URL("../icons/outdoor_grill.svg?v=63a0968a14cd108bcc7bc03291fa01a95f6c308775e5bcb31a61418651fcf89f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
