export const name="recommend-fill";
export const id="dl_03e9cfe8033c42d29d3f";
export const url=new URL("../icons/recommend-fill.svg?v=4759a748d882b5b071634fabb82a9a603592bd87dea61799fade200c922a7154",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
