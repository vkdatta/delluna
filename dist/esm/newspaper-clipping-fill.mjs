export const name="newspaper-clipping-fill";
export const id="dl_8ea6e601977545f68566";
export const url=new URL("../icons/newspaper-clipping-fill.svg?v=518e83bff16e6342465e8d7c55bb1a5ca079f8b6098b5f0d0d9de12583f95677",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
