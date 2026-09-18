export const name="split_scene_2";
export const id="dl_637ca046361648d788de";
export const url=new URL("../icons/split_scene_2.svg?v=f6686ad66d2af171bdabb673c8e8f009da4182f915a8aee2621e6aaa6029bb0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
