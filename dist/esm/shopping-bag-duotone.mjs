export const name="shopping-bag-duotone";
export const id="dl_3be5ea3c76c5a8176148";
export const url=new URL("../icons/shopping-bag-duotone.svg?v=7ecdc2a1756160dc727fc7a8587a46bb4fff9bfc1fe2ed4c45f8201dc811b3c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
