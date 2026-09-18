export const name="touchpad_mouse_off";
export const id="dl_85a145a6feea4be5a7da";
export const url=new URL("../icons/touchpad_mouse_off.svg?v=66fcbe51b46a685e30fa0a4808b4955b96516c129043cba23b4223e1125bcafc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
