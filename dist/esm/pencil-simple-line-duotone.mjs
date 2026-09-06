export const name="pencil-simple-line-duotone";
export const id="dl_c9ac1f2865e34b5c9e2b";
export const url=new URL("../icons/pencil-simple-line-duotone.svg?v=ea59d939343bd24aeed73b80fde33fe458051e393cd30088a58dcb079ff9d802",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
