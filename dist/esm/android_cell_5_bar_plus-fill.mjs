export const name="android_cell_5_bar_plus-fill";
export const id="dl_48cee64fe7332adffb2e";
export const url=new URL("../icons/android_cell_5_bar_plus-fill.svg?v=11532ee49ba585ff84c6ecf11a76a9a70cde1e632d7aaba129e1528b57bf9cc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
