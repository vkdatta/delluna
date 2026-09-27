export const name="spotify-logo-bold";
export const id="dl_f72bf596bb2fb02b47d3";
export const url=new URL("../icons/spotify-logo-bold.svg?v=09bb8703a766c43c3d04fc751fa365bb628f7de64e7788fa71f9046d6d197f0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
