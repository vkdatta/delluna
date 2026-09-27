export const name="flag-banner-fold-fill";
export const id="dl_e2579167ed1342819bda";
export const url=new URL("../icons/flag-banner-fold-fill.svg?v=08742fe1217338c170dad42550f1b67ba182d5e935942333dc3edafa0898b2f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
