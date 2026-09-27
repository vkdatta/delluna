export const name="styler-fill";
export const id="dl_f4ba51a7998617c5d0bf";
export const url=new URL("../icons/styler-fill.svg?v=a032008f8683bf0c6fd63432667c5c29b9b908c5c93f631b3684db2dfff25d44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
