export const name="report_off-fill";
export const id="dl_b69b0be431df18089074";
export const url=new URL("../icons/report_off-fill.svg?v=6112c89e1996ebca011305195cb20ef9f94b8b5c325bfdb6f5a6eb9451c8e5a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
