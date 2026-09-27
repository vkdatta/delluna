export const name="sidebar-simple-light";
export const id="dl_dc6b4351ab78d7790db7";
export const url=new URL("../icons/sidebar-simple-light.svg?v=c406db1d221de5ce47c16d2c5c44329e4aa3a186e5759ccb6d007bccd2e6de6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
