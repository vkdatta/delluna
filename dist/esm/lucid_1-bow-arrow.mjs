export const name="lucid_1-bow-arrow";
export const id="dl_ac9ced4b0a62421dbc73";
export const url=new URL("../icons/lucid_1-bow-arrow.svg?v=e4f66fd67228ddd03815f70cf36653b4d5daf32270e4e42f47922c01dc25e7d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
