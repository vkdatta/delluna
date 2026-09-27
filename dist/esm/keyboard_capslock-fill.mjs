export const name="keyboard_capslock-fill";
export const id="dl_611918bae87e9f2f293b";
export const url=new URL("../icons/keyboard_capslock-fill.svg?v=14e41a41ac1c688a929dd3cb7dcefc9a7e447c112233488e945ab2870923b23e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
