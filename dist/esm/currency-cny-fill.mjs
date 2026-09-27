export const name="currency-cny-fill";
export const id="dl_4486bc6aa5ab4a068afe";
export const url=new URL("../icons/currency-cny-fill.svg?v=a911cbacd24de28b597ad3c7a70fcb8f53b3d13e3a8107236abd1a977309a0cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
