export const name="file_map_stack-fill";
export const id="dl_5d9c1e62426bd0b551e1";
export const url=new URL("../icons/file_map_stack-fill.svg?v=ea2215cc09926e289e87471c16aab79ef629d7df1fa709ee49c26b88730dcbd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
