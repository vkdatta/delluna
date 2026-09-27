export const name="unplug";
export const id="dl_9810c88caab34c00ab3a";
export const url=new URL("../icons/unplug.svg?v=b215725991237f105667e21425b00bc9f33cf78ecfcf81f95fca2c7ac35f0430",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
