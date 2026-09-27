export const name="cheer";
export const id="dl_cf02e16cf3345f3c726e";
export const url=new URL("../icons/cheer.svg?v=73070e7e4e871cf8d14a5556eaa40537777a2a68b3957679b980a4b2a1cac1b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
