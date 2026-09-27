export const name="cell_merge";
export const id="dl_8db7b606aa416d8bc0fe";
export const url=new URL("../icons/cell_merge.svg?v=7d6c601252bc9fb7041e61acc6f857c39bef22608930788af75d83f81a9bff79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
