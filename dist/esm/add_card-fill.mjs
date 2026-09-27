export const name="add_card-fill";
export const id="dl_f6e04f291b717c6bebe2";
export const url=new URL("../icons/add_card-fill.svg?v=d53794fecb72b7fc2f5681107a07e3e875283b209fc5567d9697e06b7cb27ba0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
