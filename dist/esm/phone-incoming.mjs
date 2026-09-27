export const name="phone-incoming";
export const id="dl_cf4036a23b584af29040";
export const url=new URL("../icons/phone-incoming.svg?v=afd681f87d35c57769227c7b937ea12c99a1fe33aa720c6b550f198e6a5bed8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
