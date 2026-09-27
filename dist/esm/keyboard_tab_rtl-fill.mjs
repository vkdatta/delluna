export const name="keyboard_tab_rtl-fill";
export const id="dl_26d31d477de563ac7dcb";
export const url=new URL("../icons/keyboard_tab_rtl-fill.svg?v=2b05701289d784f1d31283e2a4d4984b3178e99fef81440c6304e6069fbb9087",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
