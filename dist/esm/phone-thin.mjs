export const name="phone-thin";
export const id="dl_e461077c950c4ab9b30a";
export const url=new URL("../icons/phone-thin.svg?v=204a3a6b38a3a107c04e7b0dec9c8001a13f718603b41b4e25661b597f431944",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
