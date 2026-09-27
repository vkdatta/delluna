export const name="lucid_2-gallery-horizontal";
export const id="dl_4b92a09bf02a471980de";
export const url=new URL("../icons/lucid_2-gallery-horizontal.svg?v=919b940be8eeee08c799d9c06f2d16e47054652e0b93c384d665ca257d374afb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
