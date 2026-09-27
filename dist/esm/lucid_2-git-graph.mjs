export const name="lucid_2-git-graph";
export const id="dl_2f32190e59644563966b";
export const url=new URL("../icons/lucid_2-git-graph.svg?v=b03802d777433c54ea4bd3bc62865e110d072cb5cb1063a8312b529ef2bb9fa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
