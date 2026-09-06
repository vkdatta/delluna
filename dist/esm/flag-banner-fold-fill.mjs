export const name="flag-banner-fold-fill";
export const id="dl_e2579167ed1342819bda";
export const url=new URL("../icons/flag-banner-fold-fill.svg?v=34a31bbf032745fbcf273af289cc95b986d4eb2f000e86f5c513a6000f82f75d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
