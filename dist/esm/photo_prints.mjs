export const name="photo_prints";
export const id="dl_f4c4ccbc9f4d7aa0caec";
export const url=new URL("../icons/photo_prints.svg?v=eeca04adb97b0b887193e779e6cfb6547377e49220aeef501b60b65e13316743",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
