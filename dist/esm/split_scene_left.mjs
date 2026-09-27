export const name="split_scene_left";
export const id="dl_4b86cc388ae6928107af";
export const url=new URL("../icons/split_scene_left.svg?v=a87c2cfaf17357b45c9441c926143b665d4712bf03f4c8f0b61d1554a04976b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
