export const name="ungroup";
export const id="dl_0bfcc4db382e4d588cdb";
export const url=new URL("../icons/ungroup.svg?v=be5f10f775c4e0c4a824c9955490eb3f48b7bf392e46f19eb308c10975e41d6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
