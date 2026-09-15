export const name="counter_6";
export const id="dl_dd6c2f5ec1ab4ea4ae62";
export const url=new URL("../icons/C/counter_6.svg?v=c5f210133167caa2de87ea6955ea41d0341e7fb446222581c82c1c2e92d93d14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
