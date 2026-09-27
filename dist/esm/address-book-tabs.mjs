export const name="address-book-tabs";
export const id="dl_92987140e643437ba633";
export const url=new URL("../icons/address-book-tabs.svg?v=6628d4e262c3e7c31df61236447d8dc80d41c368111592a5930aaf6df04e7f69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
