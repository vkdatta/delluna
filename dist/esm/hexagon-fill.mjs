export const name="hexagon-fill";
export const id="dl_87992386f1f142139aea";
export const url=new URL("../icons/hexagon-fill.svg?v=114ceffcf944f1280ea4a4c7f4456afab517272014703766e2f42b4354d2b476",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
