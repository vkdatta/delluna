export const name="lucid_3-sparkle";
export const id="dl_bfea95450f1d4ceeb158";
export const url=new URL("../icons/lucid_3-sparkle.svg?v=0a50ba458bc318d0c646de7516b4811c2f1670dcccf3a95089e0b99e190ec9fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
