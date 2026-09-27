export const name="watch_button_press-fill";
export const id="dl_c3d54aa45b671a0810ab";
export const url=new URL("../icons/watch_button_press-fill.svg?v=e4ec77bf6897ec47d123476b2b5773359215dd699526ee88885bf1239b6ec4f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
