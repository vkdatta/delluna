export const name="sort-descending-fill";
export const id="dl_e892f763089d4e97bc2e";
export const url=new URL("../icons/S/sort-descending-fill.svg?v=3905970b53fefc33413cd6169e1e881f22d48e50b0ce7398316a2e49a317d6d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
