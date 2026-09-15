export const name="edit_location-fill";
export const id="dl_47fea75af83d4b8a96ca";
export const url=new URL("../icons/E/edit_location-fill.svg?v=8bd228f48312bd47bc80c68f81f9ba4931c6e0b010c35ea7dcb2be677dcfd529",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
