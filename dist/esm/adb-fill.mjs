export const name="adb-fill";
export const id="dl_b8aaaed47acb4a86a23a";
export const url=new URL("../icons/adb-fill.svg?v=efecaa7af8fe2032bc05c1e76066302af3b274e68c1bb496585d61f48d25f14d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
