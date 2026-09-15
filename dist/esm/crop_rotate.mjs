export const name="crop_rotate";
export const id="dl_e85ec78c280347668130";
export const url=new URL("../icons/C/crop_rotate.svg?v=252c817f7ae6859025903196ba581799a394c8043e0ca5e53787cf59548def54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
