export const name="split_scene_2-fill";
export const id="dl_df621798f6c2f3ff747b";
export const url=new URL("../icons/split_scene_2-fill.svg?v=b3c9b0424742f1dcf59c55bb744c962784f3edabfe9252e4a72c9e89ba72e83c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
