export const name="chart-bar";
export const id="dl_acf01a98716142e58c5e";
export const url=new URL("../icons/chart-bar.svg?v=c00e08195dd2ffe93d0860cd50853a9875d2bce310295a5d84cb2f1e7f039e97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
