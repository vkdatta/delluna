export const name="keyboard_capslock_badge-fill";
export const id="dl_18b7b79cf76e45fb9682";
export const url=new URL("../icons/keyboard_capslock_badge-fill.svg?v=f3d1c69958d5ab5c3a1bc2678d0ad8efef40bed3bf18594959c003d8f05181f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
