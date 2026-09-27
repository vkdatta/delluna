export const name="bluetooth_connected-fill";
export const id="dl_b70de70672361ec1af99";
export const url=new URL("../icons/bluetooth_connected-fill.svg?v=594fd96b8ba10d2235b136f9ba0f155c6f9b88309c968f1170b16eced3fd7139",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
