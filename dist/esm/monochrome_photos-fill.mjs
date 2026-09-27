export const name="monochrome_photos-fill";
export const id="dl_2f6cd65ea1b21781b3b7";
export const url=new URL("../icons/monochrome_photos-fill.svg?v=e19751e7286fd5ff806d97444b02f2ab766513731b4c62819716e0c20ed7915a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
