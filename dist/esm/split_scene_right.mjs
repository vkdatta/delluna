export const name="split_scene_right";
export const id="dl_a1928998fab912f29480";
export const url=new URL("../icons/split_scene_right.svg?v=b36595a67426ace7e0fa4ddecfccf0b0403ade8f16e6d5979901934899b40655",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
