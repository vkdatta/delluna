export const name="lucid_2-database-x";
export const id="dl_f254f91388fd40718a32";
export const url=new URL("../icons/lucid_2-database-x.svg?v=3b79f860758c01370c269b63dc6857430568130505c2dde07645125551456f6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
