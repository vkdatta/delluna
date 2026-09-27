export const name="counter_5-fill";
export const id="dl_bac9644cce78b182916f";
export const url=new URL("../icons/counter_5-fill.svg?v=d4d9429a5880605f7ba423f255ed205f3701c08327dcd5f38f8d52ca5cb31cfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
