export const name="cable-fill";
export const id="dl_5eb8f015cb1722ae47f7";
export const url=new URL("../icons/cable-fill.svg?v=14c14d864971f5f04dbe6ef5dd0be1aa8e2cab28dc9cbf10191ac4eb69c85ac4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
