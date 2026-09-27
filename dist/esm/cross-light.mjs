export const name="cross-light";
export const id="dl_c1336cbb4c464429b8b1";
export const url=new URL("../icons/cross-light.svg?v=8a302d5c156b5f7324f1500b4a7a3fbd07838df8f1265f636de9da2c7815415c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
