export const name="sphere-duotone";
export const id="dl_4ece16c8b8f3234783fa";
export const url=new URL("../icons/sphere-duotone.svg?v=40210de87d572cbb6baeab9f8ab82735cc5ac348a6a545b870ac17d4f60d445a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
