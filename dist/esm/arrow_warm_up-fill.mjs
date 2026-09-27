export const name="arrow_warm_up-fill";
export const id="dl_3e23f3e78b8c0d8043fa";
export const url=new URL("../icons/arrow_warm_up-fill.svg?v=9ff84ae65695aae70004d3afa665bca6813d84fd46c4a9f3f1498e8191cb60ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
