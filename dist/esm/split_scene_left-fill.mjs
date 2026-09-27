export const name="split_scene_left-fill";
export const id="dl_0b61539fc9b3cb29bcab";
export const url=new URL("../icons/split_scene_left-fill.svg?v=415666fbed6d275adfab2eb2793fa4aa59349fe5c67879df1b54dce7922229d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
