export const name="lucid_3-pen";
export const id="dl_71d1e1637dc046669ef9";
export const url=new URL("../icons/lucid_3-pen.svg?v=877f56fe61c490b0aa402e1c128b29c48e6f479b0003c67caf133b2c38b86a9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
