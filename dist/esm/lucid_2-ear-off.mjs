export const name="lucid_2-ear-off";
export const id="dl_aa99a1f3252349b9a554";
export const url=new URL("../icons/lucid_2-ear-off.svg?v=ed8ea5e88c4bfe48d13c778427852617f2e9ee060bd9ed6a7bbaf1a6d7baf3e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
