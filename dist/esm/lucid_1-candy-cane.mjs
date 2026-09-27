export const name="lucid_1-candy-cane";
export const id="dl_d2e4a0377c664e2da9b3";
export const url=new URL("../icons/lucid_1-candy-cane.svg?v=9dcc44aabd7330d36faec07d93a311795ca1e4a4d9b177362b3313c4be582e71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
