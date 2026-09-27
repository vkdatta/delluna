export const name="numpad-thin";
export const id="dl_5069f2ecfd594b70a5ad";
export const url=new URL("../icons/numpad-thin.svg?v=952e9081dc2f5ec3ed217a44df8a91886c71db922382c7dd50afcf69517efc83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
