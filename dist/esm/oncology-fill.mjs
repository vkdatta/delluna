export const name="oncology-fill";
export const id="dl_95f618483ca3479294b7";
export const url=new URL("../icons/oncology-fill.svg?v=475e919fc8d7e769a96c1027dfa08cc9c8aecc03cdfc2db696e9e1d97a3a7bda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
