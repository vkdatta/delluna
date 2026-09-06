export const name="cow";
export const id="dl_346e3be44b5c4bf5ac2d";
export const url=new URL("../icons/cow.svg?v=55f057a1c8f7c97a174cf5bce7408934a0c55254bad3e5432935b3331d2eb29a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
