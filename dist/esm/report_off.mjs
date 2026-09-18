export const name="report_off";
export const id="dl_98ba2d62cd4344538275";
export const url=new URL("../icons/R/report_off.svg?v=62c0c48d2d8cdfffccbcc5f4bc15d0f2b333dc87256c3b3412d97fa700992566",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
