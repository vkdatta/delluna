export const name="flowsheet-fill";
export const id="dl_4a3e10c3ae80da4d1244";
export const url=new URL("../icons/flowsheet-fill.svg?v=d4ffcffddc4af41c2f48e74a7559074b97f90141940c7dbbece40538cfc3de19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
