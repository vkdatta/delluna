export const name="chart-bar-horizontal-fill";
export const id="dl_0f8a1473923540329223";
export const url=new URL("../icons/chart-bar-horizontal-fill.svg?v=14949a9ca8984e34e2ca4b94872317692e97ab04766ba5cd4036ea756a9bbc12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
