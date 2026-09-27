export const name="settings_brightness-fill";
export const id="dl_c6297c666609167119cf";
export const url=new URL("../icons/settings_brightness-fill.svg?v=ab163f48414a8a5213e6fc9896a11a5376f3b6e3c57ce4d1cc7904429902dbbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
