export const name="swatches-fill";
export const id="dl_0dea04538c4d8878ef79";
export const url=new URL("../icons/swatches-fill.svg?v=2783e52c04034ef119703542191b86a670c88fb5da2218df055bf81882fe8c24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
