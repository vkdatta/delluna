export const name="add_home_work-fill";
export const id="dl_490cacf0a31f28a6918d";
export const url=new URL("../icons/add_home_work-fill.svg?v=701856467683f41db5413d0e2905e7381feba40b738bc208719c498304ca81b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
