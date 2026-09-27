export const name="warehouse";
export const id="dl_8eeef01062927e0a5046";
export const url=new URL("../icons/warehouse.svg?v=40f3e4a7ac68694c8aada491741416052379f4ab0fb0b8aaf474232f77664501",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
