export const name="address-book-tabs";
export const id="dl_92987140e643437ba633";
export const url=new URL("../icons/address-book-tabs.svg?v=7b241873174ebce37daeabc5104879069838138f833f669306f7c9d5437e0eac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
