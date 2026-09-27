export const name="sort-descending-fill";
export const id="dl_d6bd98f302b9bea4a3c4";
export const url=new URL("../icons/sort-descending-fill.svg?v=87cd3f6664b6c88a4c73b464c4b2eafb18e7c04f9131109d10c747b1e5694c62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
