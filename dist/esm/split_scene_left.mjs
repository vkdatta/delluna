export const name="split_scene_left";
export const id="dl_909021dd328b46328562";
export const url=new URL("../icons/split_scene_left.svg?v=4abde6d1369be3650627d6f209c95ec85545411d766955761f5a46452a89c2dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
