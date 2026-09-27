export const name="shrimp-fill";
export const id="dl_44da6714e65980cb802e";
export const url=new URL("../icons/shrimp-fill.svg?v=6cdba1bb2148dbc87bfb2ae6034529464466cdb0b3d0c00770bcdb10f206c894",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
