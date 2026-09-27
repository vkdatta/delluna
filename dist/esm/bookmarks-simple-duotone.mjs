export const name="bookmarks-simple-duotone";
export const id="dl_4d358231142c4e078680";
export const url=new URL("../icons/bookmarks-simple-duotone.svg?v=7039f685ac3cab472915dbc1951f8792d21dfed4a05b8806c7666fae4c18fb7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
