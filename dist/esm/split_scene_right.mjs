export const name="split_scene_right";
export const id="dl_d0e74c72e4fc33a506b3";
export const url=new URL("../icons/split_scene_right.svg?v=aa861353c0e614e13e3207ec39be5af4b2f7361f001b6f527d29419558e38019",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
