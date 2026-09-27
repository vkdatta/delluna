export const name="lucid_2-flag-triangle-right";
export const id="dl_d78ba72fc5a84b429566";
export const url=new URL("../icons/lucid_2-flag-triangle-right.svg?v=091f76cfa73090394ebddc4125ef40e33e45cd62844347c7ae6b5cd6136babe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
