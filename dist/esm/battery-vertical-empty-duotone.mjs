export const name="battery-vertical-empty-duotone";
export const id="dl_5f88704e29a64ca4bf7e";
export const url=new URL("../icons/battery-vertical-empty-duotone.svg?v=8ce97fd2e70bfc85028f360acd827e613214cfd76ed6fa08859397be5430d618",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
