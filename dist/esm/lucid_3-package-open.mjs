export const name="lucid_3-package-open";
export const id="dl_c9491e129ef54a57ad5a";
export const url=new URL("../icons/lucid_3-package-open.svg?v=e988119051202e3399efd88bea96ea50d6beea52e8d7fdcf657e22e75b35b6f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
