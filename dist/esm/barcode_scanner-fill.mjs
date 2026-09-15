export const name="barcode_scanner-fill";
export const id="dl_99b8fef77232406782cb";
export const url=new URL("../icons/B/barcode_scanner-fill.svg?v=b8e324520a7264502f06a829c83e67705f70522fe48002fc699ebc2b2b8b2361",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
