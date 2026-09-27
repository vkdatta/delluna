export const name="android_cell_5_bar_plus-fill";
export const id="dl_12a815b48e6765764cda";
export const url=new URL("../icons/android_cell_5_bar_plus-fill.svg?v=6e85b30b4cdd8717decdc79568f1cc90a7d3fc6b7badc045b6f6bfc2c432b028",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
