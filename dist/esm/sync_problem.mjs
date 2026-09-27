export const name="sync_problem";
export const id="dl_6eaddecfe37a9661adf0";
export const url=new URL("../icons/sync_problem.svg?v=9aae36fac5f0040a4390968ab6b40827a8db54a7e5a01ea584ce60e75f25bb81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
