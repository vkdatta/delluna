export const name="battery_android_shield-fill";
export const id="dl_c50defa05b13d87ec023";
export const url=new URL("../icons/battery_android_shield-fill.svg?v=f1dd284055d92fabf3f42489020764addf33a0bc8716fca3075986143b7724dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
