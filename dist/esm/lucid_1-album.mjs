export const name="lucid_1-album";
export const id="dl_fa97c99d8091423586ad";
export const url=new URL("../icons/lucid_1-album.svg?v=3289ca63a38d415cd3eb4abc11bdfd56a0122169a7fd673611d17f71525c3cf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
