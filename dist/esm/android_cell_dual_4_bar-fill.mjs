export const name="android_cell_dual_4_bar-fill";
export const id="dl_f5e34ec91bf7514a834b";
export const url=new URL("../icons/android_cell_dual_4_bar-fill.svg?v=e39214b5fa9a9a8e0f7a078f86bd06d5801d526e45dfda8b9843776a7dfedee2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
