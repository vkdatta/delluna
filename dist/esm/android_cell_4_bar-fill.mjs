export const name="android_cell_4_bar-fill";
export const id="dl_985288cc6c80308565bf";
export const url=new URL("../icons/android_cell_4_bar-fill.svg?v=79b54413063213cc7e7d68d8295699afb8d30a6c65c7dfd6a3ebb4684ccd43ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
