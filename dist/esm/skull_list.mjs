export const name="skull_list";
export const id="dl_a890217bb18d5d8e53bd";
export const url=new URL("../icons/skull_list.svg?v=579adb49163c7f67b91e7a6ce211ef611ed1b7a5a90b2a7a4745fcdd3e6751e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
