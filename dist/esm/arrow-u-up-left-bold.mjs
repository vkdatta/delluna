export const name="arrow-u-up-left-bold";
export const id="dl_f927479647ed47b68219";
export const url=new URL("../icons/arrow-u-up-left-bold.svg?v=1fcbd00a2254c082401322d0f67e6fbe5a3be765568df14969037cdd79552306",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
