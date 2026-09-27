export const name="image-square-bold";
export const id="dl_fab369778b834f1eb4c2";
export const url=new URL("../icons/image-square-bold.svg?v=db754b2bbf1ad29a5755ba23a5f2d6deab90bd58ef9f000b2875533d7c452173",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
