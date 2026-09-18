export const name="highlight_keyboard_focus";
export const id="dl_4d36223fa542453fac3f";
export const url=new URL("../icons/highlight_keyboard_focus.svg?v=259884503fce3d266c3aecb1f98ba82dd503b646d7c577fd4c6904b1c026c0bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
