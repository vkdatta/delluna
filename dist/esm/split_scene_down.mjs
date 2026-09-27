export const name="split_scene_down";
export const id="dl_1a36de4aa4bbfa1c0e31";
export const url=new URL("../icons/split_scene_down.svg?v=61b534aef9d9c1d7f11581a42ed36a17b80aaa3aa07583f67f00416dd326627b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
