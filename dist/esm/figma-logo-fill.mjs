export const name="figma-logo-fill";
export const id="dl_e06607ed1005445d917e";
export const url=new URL("../icons/figma-logo-fill.svg?v=ac92931fdf9a70f7b2551df1f2d561b073fba2cef09c4ee3096e625fba735a60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
