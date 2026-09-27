export const name="polymer-fill";
export const id="dl_ff014af31513dfbf8e1c";
export const url=new URL("../icons/polymer-fill.svg?v=fa24b1c9866994a8f837308e6390b48a75e285a20a0c756b85f7ca3458d6a9ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
