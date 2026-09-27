export const name="columns-plus-right";
export const id="dl_06b7601b71154008bd29";
export const url=new URL("../icons/columns-plus-right.svg?v=baf5eb1aa5ab88d3db3faaaaffbce5b9831cb734155a46187caba0b327118882",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
