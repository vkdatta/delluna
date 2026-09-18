export const name="respiratory_rate";
export const id="dl_ab35610b600b42249164";
export const url=new URL("../icons/R/respiratory_rate.svg?v=0d14c91cb83a8749a063eece2190fa6eb4a84e190fd1f523d1850769eebeb7cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
