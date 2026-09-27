export const name="lucid_2-git-graph";
export const id="dl_2f32190e59644563966b";
export const url=new URL("../icons/lucid_2-git-graph.svg?v=2e340f4565c14c48ad8381954f29da7942591c660aa80cc98046a013c1e3dc8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
