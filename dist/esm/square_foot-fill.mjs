export const name="square_foot-fill";
export const id="dl_7f0921c88466104126b1";
export const url=new URL("../icons/square_foot-fill.svg?v=dfda64cced8a1a66a28280d4559eadbb4f7004e6d3bdf46f54d13d968e47e71d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
