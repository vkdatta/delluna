export const name="bottom_sheets-fill";
export const id="dl_c67cc33ab2f5d43b9833";
export const url=new URL("../icons/bottom_sheets-fill.svg?v=a8c596158856ea30d607ddfcf9df537a223b0d37a1699cbd5280fe5925a8d3b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
