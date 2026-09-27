export const name="cutter";
export const id="dl_189f0bcd2dc54b4cac73";
export const url=new URL("../icons/cutter.svg?v=f67a3d5d0ea4246ebafdc56c3ccc08817bc04da39687c643f31e27eb49f2a177",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
