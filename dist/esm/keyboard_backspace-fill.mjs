export const name="keyboard_backspace-fill";
export const id="dl_d6b86aaa85de4d20469e";
export const url=new URL("../icons/keyboard_backspace-fill.svg?v=c9e03831c8d1104472e98ff550b34a512fade36d53540efb7df3778fa25113cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
