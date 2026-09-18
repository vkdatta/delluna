export const name="outdoor_grill";
export const id="dl_f4e2f54a84cb46748589";
export const url=new URL("../icons/O/outdoor_grill.svg?v=7d860c649aec7637a582484f6f48c7ec627f1b8eaa6c9226e0f5779acf032419",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
