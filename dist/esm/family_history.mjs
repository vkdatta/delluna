export const name="family_history";
export const id="dl_7f89f5fda8c9f5969430";
export const url=new URL("../icons/family_history.svg?v=cfefd74db7c4236d19b16b2f68d242ba1af14c8f3b3c74b6cb4668ea122e8294",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
