export const name="android_cell_5_bar_alert";
export const id="dl_0508b7d1e18a2aeba75e";
export const url=new URL("../icons/android_cell_5_bar_alert.svg?v=b92d3c86ce1d8af9c98cd3a1cbcbae82ae80168fcdc7f0bfb18351edbf14d416",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
