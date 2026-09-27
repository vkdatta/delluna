export const name="contrast_rtl_off-fill";
export const id="dl_df77ec041bb600878762";
export const url=new URL("../icons/contrast_rtl_off-fill.svg?v=87b31d63470c74188ee958fe8074ef7f6e622f1ecc725857322ab253543b6c95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
