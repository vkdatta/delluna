export const name="text-align-justify-duotone";
export const id="dl_c64b15bb7af0d7efb93c";
export const url=new URL("../icons/text-align-justify-duotone.svg?v=d4d5e9ccd5cd819c8e4e6864523764d3d032af58f496f71a520cb17d54cadf15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
