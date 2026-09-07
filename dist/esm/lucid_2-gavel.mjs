export const name="lucid_2-gavel";
export const id="dl_5117c2d58a5c4cdc8485";
export const url=new URL("../icons/lucid_2-gavel.svg?v=588923d20af03e8891f15687e2d0590f7451d62828d582704fabebe9d72b6ea3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
