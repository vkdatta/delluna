export const name="code_blocks";
export const id="dl_6f2c09b36d9a7558acaf";
export const url=new URL("../icons/code_blocks.svg?v=d4bee4292b52550dc6fe531cfd55a473c31f58dba8c1b480496043b010a108e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
