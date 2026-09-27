export const name="keyboard_capslock_badge";
export const id="dl_fc2f54da48e54b022d56";
export const url=new URL("../icons/keyboard_capslock_badge.svg?v=e789bca75609ebf530850d066a3814063dfd600dcba78f6ac3bd849e709d4c05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
