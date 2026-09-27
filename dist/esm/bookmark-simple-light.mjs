export const name="bookmark-simple-light";
export const id="dl_151b9d79c1a64e5498e0";
export const url=new URL("../icons/bookmark-simple-light.svg?v=7195c724d53d1dfa1af035f47ca705a06d2d21bcf97b6718523b69fb02bd8f97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
