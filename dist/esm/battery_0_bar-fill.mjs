export const name="battery_0_bar-fill";
export const id="dl_8395d404b5c4f1091552";
export const url=new URL("../icons/battery_0_bar-fill.svg?v=415db1ec884366241b090437d67679016d8e86f265722484f3a8b870fdbb44a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
