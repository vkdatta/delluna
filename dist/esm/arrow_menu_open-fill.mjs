export const name="arrow_menu_open-fill";
export const id="dl_b5379f2bb78641ad9bf4";
export const url=new URL("../icons/arrow_menu_open-fill.svg?v=ba3b3c91f1a1a23138199fe50fae358a3f98ee03956664bfd35690c93f12031c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
