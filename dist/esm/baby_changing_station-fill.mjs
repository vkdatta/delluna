export const name="baby_changing_station-fill";
export const id="dl_baf68819caaead71995f";
export const url=new URL("../icons/baby_changing_station-fill.svg?v=779e5b2bafe50143792c2e125f43615ef49e7f3b1226ae92ed73fd738b7bd297",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
