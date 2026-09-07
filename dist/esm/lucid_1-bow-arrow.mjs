export const name="lucid_1-bow-arrow";
export const id="dl_ac9ced4b0a62421dbc73";
export const url=new URL("../icons/lucid_1-bow-arrow.svg?v=36dbcf663fbe3c168c3452b559fbefda6715e9dd8d3ba4054d05e8a757b5d8f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
