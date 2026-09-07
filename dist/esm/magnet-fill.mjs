export const name="magnet-fill";
export const id="dl_c8e69b3e4cd646a98838";
export const url=new URL("../icons/magnet-fill.svg?v=d8e242222295a8f1e008e6d9475bdf62054745537ab26701ab422263c57e21a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
