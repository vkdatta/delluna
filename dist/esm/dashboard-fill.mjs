export const name="dashboard-fill";
export const id="dl_fa436c4c9efb80a6e738";
export const url=new URL("../icons/dashboard-fill.svg?v=c44eebc725f967bc83bcc138cabfa96a7bd69687288f1921ad9aaa283b5b4b0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
