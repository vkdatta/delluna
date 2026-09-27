export const name="backpack-fill";
export const id="dl_0c052ccb96be4f8881d6";
export const url=new URL("../icons/backpack-fill.svg?v=6ffe43cc7950c00e9f64187dba8ccfd8be72f03b1d63a60f69c16b4d307f8e47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
