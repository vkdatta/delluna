export const name="shaved_ice-fill";
export const id="dl_546c145ffca37697841d";
export const url=new URL("../icons/shaved_ice-fill.svg?v=4951e260b60c371280887806811d2cec99d3c4e52f659d3fb512e6e3e7484619",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
