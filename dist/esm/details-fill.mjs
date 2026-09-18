export const name="details-fill";
export const id="dl_94fa54e8efd34b11889d";
export const url=new URL("../icons/details-fill.svg?v=2f49a6f111adf21d7cbce31229e73d12e82b3d60c579d38106b0b088b222c008",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
