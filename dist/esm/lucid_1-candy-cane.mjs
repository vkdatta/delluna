export const name="lucid_1-candy-cane";
export const id="dl_d2e4a0377c664e2da9b3";
export const url=new URL("../icons/lucid_1-candy-cane.svg?v=44e897aaf896aec9a03e9fe10cd509c43b9e1f5033aae0b1a1c00587bb7a3a42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
