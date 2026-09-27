export const name="split_scene_up";
export const id="dl_a81bb62d4739382fbfd0";
export const url=new URL("../icons/split_scene_up.svg?v=c5f0d1daabd8a8209e3af5a49394f7a569275444e9438f2104617cfc7fc70a81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
