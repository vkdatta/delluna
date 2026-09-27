export const name="edit_square-fill";
export const id="dl_16d4b19f93d2f99a58d1";
export const url=new URL("../icons/edit_square-fill.svg?v=373db93a2041e8534735fba8aac29d600f77c6337d24fa426d905f9e6e706ac2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
