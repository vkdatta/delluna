export const name="arrow_drop_down_circle-fill";
export const id="dl_6d76436dc2c1ce174c1c";
export const url=new URL("../icons/arrow_drop_down_circle-fill.svg?v=7ac643530beac0b56a46aeb5cd5a5866030cbcbafce4d3e71e9a5cc5bdac8138",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
