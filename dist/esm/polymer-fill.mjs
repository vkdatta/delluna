export const name="polymer-fill";
export const id="dl_58bce09fda494ce19f8e";
export const url=new URL("../icons/P/polymer-fill.svg?v=34944e3e7bb0db1e0bbab367270db1333bdb5c2e7e07696af5f264277a03c939",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
