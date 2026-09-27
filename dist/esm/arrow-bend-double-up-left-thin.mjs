export const name="arrow-bend-double-up-left-thin";
export const id="dl_bbb8feed7e0346e8bda4";
export const url=new URL("../icons/arrow-bend-double-up-left-thin.svg?v=38a2978df3346cab811f1f1516d0b0df60476721cf7cc0e4afdc2b8ede49e4da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
