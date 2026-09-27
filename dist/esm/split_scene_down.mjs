export const name="split_scene_down";
export const id="dl_70ec6d3e268ca64120fc";
export const url=new URL("../icons/split_scene_down.svg?v=cca3f4f2ffba4bd1fb9ab088d8825eadf4c96e8a906a38c1201e1f003cc71030",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
