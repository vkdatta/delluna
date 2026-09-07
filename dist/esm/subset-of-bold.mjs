export const name="subset-of-bold";
export const id="dl_0b498c45583c4c469366";
export const url=new URL("../icons/S/subset-of-bold.svg?v=7a50b3705063c4bd2357c4aadb6d43f8817ceb86a6cef447445d77375d54c997",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
