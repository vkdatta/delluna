export const name="water_lock-fill";
export const id="dl_2808885b056bb9949030";
export const url=new URL("../icons/water_lock-fill.svg?v=55bd4415fcf3a4c122d62ff2895d3b5f3864525b078c33644123347dd2cfa068",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
