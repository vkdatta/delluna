export const name="lucid_3-square-arrow-down-left";
export const id="dl_d1c4614b7f2c4f699d77";
export const url=new URL("../icons/lucid_3-square-arrow-down-left.svg?v=60a885e72f47cb4e103b63fecd9f7480174737a00549869dbd6418f724d0bf5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
