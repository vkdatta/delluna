export const name="arrows-left-right";
export const id="dl_1264da9a0b934e868ae9";
export const url=new URL("../icons/arrows-left-right.svg?v=84c43373542a3ac2e7de3d22ddef0c8eb61ef6ba7a270c6aca5aa493dd40f8b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
