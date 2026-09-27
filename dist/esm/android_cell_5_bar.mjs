export const name="android_cell_5_bar";
export const id="dl_cde8cbc66094ba797872";
export const url=new URL("../icons/android_cell_5_bar.svg?v=7be0ca199e2c74b00947b0fab7d3e88d1fd8c7014c331a1609c48d77ea334102",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
