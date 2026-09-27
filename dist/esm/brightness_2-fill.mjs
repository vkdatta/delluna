export const name="brightness_2-fill";
export const id="dl_707b20ee52418f343f17";
export const url=new URL("../icons/brightness_2-fill.svg?v=2cec14ab75a67de85f91aeb1c1b20da177db9680e9a3078e3df3bcda1c3a5620",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
