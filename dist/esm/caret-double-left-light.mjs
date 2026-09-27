export const name="caret-double-left-light";
export const id="dl_6c0780d00ec246c7843d";
export const url=new URL("../icons/caret-double-left-light.svg?v=82a1f8ff8b496ee14178d63dbf161a706979a3caa615fa511939e014cbea120e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
