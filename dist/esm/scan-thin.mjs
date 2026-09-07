export const name="scan-thin";
export const id="dl_ec532885ae5f4cfc95ce";
export const url=new URL("../icons/S/scan-thin.svg?v=bfd320ebc857482dcf6f17c1f7682f71bbff70aa7fa260ce255c54582a3e58d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
