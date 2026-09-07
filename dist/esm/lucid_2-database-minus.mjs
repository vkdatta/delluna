export const name="lucid_2-database-minus";
export const id="dl_657c167ff9bf44709508";
export const url=new URL("../icons/lucid_2-database-minus.svg?v=470f95464a4e4b3cf25ea017bc592bc0f03ae22ca216d476371bcae0f94f365a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
