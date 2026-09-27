export const name="bookmark_heart-fill";
export const id="dl_ab6de72b4d912b3d94a3";
export const url=new URL("../icons/bookmark_heart-fill.svg?v=1fc9eac64cf7bfa50d3a7426b7edaee64e64e41ab2ceef3ce3331f2e220be920",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
