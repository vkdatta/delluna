export const name="credit_score-fill";
export const id="dl_ba985714f8d041e491f1";
export const url=new URL("../icons/C/credit_score-fill.svg?v=5734264dbdf68733d8adbbe94910f26557f847cda675b4c5fcb6420865d91f2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
