export const name="address-book-tabs";
export const id="dl_92987140e643437ba633";
export const url=new URL("../icons/address-book-tabs.svg?v=d6a15586f7abea2e8789d6021e1ce026223c832718f23933df701ab3665721b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
