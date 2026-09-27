export const name="south_america-fill";
export const id="dl_40a2c474332068fa3e2c";
export const url=new URL("../icons/south_america-fill.svg?v=5fe42be9372319950767070820ed8e9d53ea6b086d4569c030fe5c5cbf34e6d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
