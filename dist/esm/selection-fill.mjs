export const name="selection-fill";
export const id="dl_fd42c8521ec42a18d287";
export const url=new URL("../icons/selection-fill.svg?v=7d9253bb2bb679aa0b1c93a6b2d3d77c84649d08e545ce8cdc4f4b76a4c4c648",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
