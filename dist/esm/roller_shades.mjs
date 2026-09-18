export const name="roller_shades";
export const id="dl_f71a84d6384348df9658";
export const url=new URL("../icons/R/roller_shades.svg?v=df69a562639137ffa703a0f0a2ceca23d639696c6b054b3994064e8e3dec1ed3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
