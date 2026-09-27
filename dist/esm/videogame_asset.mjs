export const name="videogame_asset";
export const id="dl_48252abf989b92cb3143";
export const url=new URL("../icons/videogame_asset.svg?v=b798404045acac46ca1bef6ea4ba574f82c8eb5f08a1528a69ea18142c0c07ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
