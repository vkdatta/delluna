export const name="mist-fill";
export const id="dl_72790d6790847937c2bf";
export const url=new URL("../icons/mist-fill.svg?v=fffa1113d4dc4568984d9726fb2d94ea7451d55f558c17d01c204ce82c6d981d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
