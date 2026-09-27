export const name="scroll-fill";
export const id="dl_effda819c9a0f20cac6d";
export const url=new URL("../icons/scroll-fill.svg?v=506cfcc195e505424e5ed74d7dc9bff4adef53d070fe3a66e6f0b41a76f359ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
