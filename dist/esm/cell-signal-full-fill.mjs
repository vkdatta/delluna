export const name="cell-signal-full-fill";
export const id="dl_d22de4d50b6143e1873c";
export const url=new URL("../icons/cell-signal-full-fill.svg?v=50e91a7d445dba17073b8bfe2d4fb186b51bade7bbbc63b129cf7850e29d8154",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
