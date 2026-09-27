export const name="widget_medium-fill";
export const id="dl_946f1424ce11c702679a";
export const url=new URL("../icons/widget_medium-fill.svg?v=b9bc7af0189dba2151ef921a79d8c8f1dc954a1e80c1090c6e3519565185bcee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
