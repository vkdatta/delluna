export const name="apk_install-fill";
export const id="dl_d8faf7fd775b4f79b06a";
export const url=new URL("../icons/A/apk_install-fill.svg?v=0f55d0b9e7fc11a1f92b254c3b13e42dd91ad1b275dd55a7609f1bdd9c68dc2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
