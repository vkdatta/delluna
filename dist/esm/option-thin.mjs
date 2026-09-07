export const name="option-thin";
export const id="dl_2a395c2c615b41f3ad2d";
export const url=new URL("../icons/option-thin.svg?v=30aa61f2e99b321036d1852c2e3c5f9f6dfaf94626b864062129b7a1cdd88961",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
