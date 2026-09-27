export const name="shuffle-simple-duotone";
export const id="dl_fa23f49e5beefa8f3cd5";
export const url=new URL("../icons/shuffle-simple-duotone.svg?v=cfacd8f87828971e1e43970673033431c3aa52f8adbea9c69e0dc14fbe736192",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
