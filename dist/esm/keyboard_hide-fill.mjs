export const name="keyboard_hide-fill";
export const id="dl_095f1a3c3c631a390025";
export const url=new URL("../icons/keyboard_hide-fill.svg?v=141a6e6b1f6f440863bffae9c77099375731acb9af053f31de00f9925e89481b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
