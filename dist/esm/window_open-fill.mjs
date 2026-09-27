export const name="window_open-fill";
export const id="dl_3da19918d6b8feb3731f";
export const url=new URL("../icons/window_open-fill.svg?v=d3f2ae78051c42585c660274d0dcbcf2f6f711e9ffb89e04bf736029632aa21e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
