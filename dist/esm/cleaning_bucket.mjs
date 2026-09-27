export const name="cleaning_bucket";
export const id="dl_d9112d83af32cc278606";
export const url=new URL("../icons/cleaning_bucket.svg?v=7fe20777d08c8c4f93635a8318a8d5e6f19f3d213a01637cf2f63a544a7c6f0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
