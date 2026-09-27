export const name="face_retouching_off-fill";
export const id="dl_2c61c6f6bd4f4dc9edb5";
export const url=new URL("../icons/face_retouching_off-fill.svg?v=058074f5d6ae0952854d0ad42974f8d5fa9a587ec606b1a37f24da93cc57a83e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
