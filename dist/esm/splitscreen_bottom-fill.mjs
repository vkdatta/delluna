export const name="splitscreen_bottom-fill";
export const id="dl_fb3cae0ec09d4c4c9a27";
export const url=new URL("../icons/splitscreen_bottom-fill.svg?v=431a68bdc88e2c602640691f89114078bf9aac2d252612922a37c417a6763f30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
