export const name="flood";
export const id="dl_a2abdc2169c1aa470e27";
export const url=new URL("../icons/flood.svg?v=a173ab24b7bf5abdf1709bae25b767f1a14ccd70b9c14c864724b5159827d5e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
