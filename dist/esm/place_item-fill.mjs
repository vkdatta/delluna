export const name="place_item-fill";
export const id="dl_dd7c333e74c5197ad71e";
export const url=new URL("../icons/place_item-fill.svg?v=6b12c82a35e80ac53ab8abfd2ac80d690c391988610edc2d809c0d0629a53328",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
