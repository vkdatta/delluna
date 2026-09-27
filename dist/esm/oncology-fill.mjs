export const name="oncology-fill";
export const id="dl_e7ed83d621122ac77093";
export const url=new URL("../icons/oncology-fill.svg?v=cc01eb48ec434cb7f05f95a8651518b9c4531452c25a0d5c5e769042d3f9f5a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
