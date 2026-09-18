export const name="pen_size_5-fill";
export const id="dl_f7d3d5e546404d3494b6";
export const url=new URL("../icons/P/pen_size_5-fill.svg?v=423ef73f6d0f5996e9a5ca22c89c5c99d7fb2b28b39d03cf7873a2196ba90b7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
