export const name="crop_square-fill";
export const id="dl_37744e820d7f595acb78";
export const url=new URL("../icons/crop_square-fill.svg?v=e97fa1a744229fd08dadac830466e303fa257fb810bccd97e4c743bf5d8a96ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
