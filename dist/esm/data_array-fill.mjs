export const name="data_array-fill";
export const id="dl_0f6444d8f62cf2e3d315";
export const url=new URL("../icons/data_array-fill.svg?v=bd2003ae0d15e45327c4552b1526a8545faafeb55e93b074c93c48299e7316b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
