export const name="router_off";
export const id="dl_b66906c4d17f4fe5ab14";
export const url=new URL("../icons/router_off.svg?v=cb18c65da848c02d007f8cdc5684302589e8ed66c294dde1034abf2273ddcbc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
