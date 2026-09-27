export const name="android_cell_dual_4_bar-fill";
export const id="dl_d8cbb8f1c0abe9b90f27";
export const url=new URL("../icons/android_cell_dual_4_bar-fill.svg?v=2481b879a1298195bef2188da2e663d5a1b50cca4e929444c372c5b1aa84718e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
