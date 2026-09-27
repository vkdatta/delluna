export const name="mobile_menu-fill";
export const id="dl_50acc7f001b0e647ca1b";
export const url=new URL("../icons/mobile_menu-fill.svg?v=d539da5fff8408312fc0a9fcb4f4154d915bf960caa6c5c2bb05a139cdfdb93f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
