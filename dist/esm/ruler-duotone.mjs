export const name="ruler-duotone";
export const id="dl_db1aa647f97b494ea5ba";
export const url=new URL("../icons/ruler-duotone.svg?v=a24f95c5c67ca39b23dc94e6f7de4199af14488497908c2b4b45a304b5e42118",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
