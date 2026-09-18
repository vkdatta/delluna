export const name="sticker_add";
export const id="dl_377f122fae8541c6b6f3";
export const url=new URL("../icons/S/sticker_add.svg?v=3cba19e85a7ab86601d8b596b8a83926ffa93cd01dbff85cf98d1098367e87d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
