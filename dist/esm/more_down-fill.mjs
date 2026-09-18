export const name="more_down-fill";
export const id="dl_8e1e1986dbbf4ff8a14f";
export const url=new URL("../icons/M/more_down-fill.svg?v=c0d88af42768858b66005940bb2a843bca21a0fb86486c35fc7d16ad8d995759",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
