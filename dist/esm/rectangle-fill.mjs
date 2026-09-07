export const name="rectangle-fill";
export const id="dl_6fbc40b99b1c4fe6aeb5";
export const url=new URL("../icons/rectangle-fill.svg?v=7183ed26332d150613af52176ab26d13ba8512399511e4b91d997aeda72b9ea9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
