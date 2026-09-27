export const name="lucid_3-mirror-rectangular";
export const id="dl_bd3f17c7e9de4df5a642";
export const url=new URL("../icons/lucid_3-mirror-rectangular.svg?v=0967e8968582b45c82a386e02d9f6f20b589a0847df1513e4550247826b4727a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
