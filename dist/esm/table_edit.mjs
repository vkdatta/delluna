export const name="table_edit";
export const id="dl_e42693c1944f0395e465";
export const url=new URL("../icons/table_edit.svg?v=8489686a8141f77da19d422edc7a08c030d65e90043040df7e054c5a891045c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
