export const name="texture_minus-fill";
export const id="dl_1a2d76c87f3a7d06076d";
export const url=new URL("../icons/texture_minus-fill.svg?v=df873542b93a261e04144725848b5d37908931505a51c55aa73e1145a34d6e4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
