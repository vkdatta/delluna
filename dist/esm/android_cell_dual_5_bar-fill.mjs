export const name="android_cell_dual_5_bar-fill";
export const id="dl_88072926d8d7577e7e5b";
export const url=new URL("../icons/android_cell_dual_5_bar-fill.svg?v=2ad1dd9bee59142f0100ccb64461403aa1b085c8da714b0251da9f059bd5a362",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
