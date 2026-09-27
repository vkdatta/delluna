export const name="loupe-fill";
export const id="dl_d5c4bf91d852d5cb0b4c";
export const url=new URL("../icons/loupe-fill.svg?v=659f8f9588efae46bcd643a377222aa1bf0a30e1884cad831abc099bd3dcd32d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
