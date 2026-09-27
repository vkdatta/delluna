export const name="hive-fill";
export const id="dl_e949fa011306250e4399";
export const url=new URL("../icons/hive-fill.svg?v=4f06cbf9d204f2f07a7104495e9f3798201fd5ea0e316a8726a5126d0117273b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
