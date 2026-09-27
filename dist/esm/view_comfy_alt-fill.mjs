export const name="view_comfy_alt-fill";
export const id="dl_00ac537eb21cb81e503b";
export const url=new URL("../icons/view_comfy_alt-fill.svg?v=3a448654c28219b1dc9470900e4d9d8ea7f8aa44c298cbda29b123652bce9944",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
