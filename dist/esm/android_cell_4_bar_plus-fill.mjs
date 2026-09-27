export const name="android_cell_4_bar_plus-fill";
export const id="dl_55880068c0f92ff4cdaa";
export const url=new URL("../icons/android_cell_4_bar_plus-fill.svg?v=10f127a646ff20c3a656ce8776a7f79cf4423003e6fbb7b0ff13bb345702c3a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
