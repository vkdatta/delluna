export const name="keyboard_backspace-fill";
export const id="dl_fef0f39bfe2e45c9a3f5";
export const url=new URL("../icons/K/keyboard_backspace-fill.svg?v=846531fcbe437a0c540afcb9f54229d72af57e01e1c41aea8a752b5be16ac10c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
