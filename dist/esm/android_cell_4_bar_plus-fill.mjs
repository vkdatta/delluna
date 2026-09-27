export const name="android_cell_4_bar_plus-fill";
export const id="dl_4e52e484da1adb0a68e3";
export const url=new URL("../icons/android_cell_4_bar_plus-fill.svg?v=d8a62186994ff016ab2a75c552a178078a30177be728f8031a3710ff17e6917e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
