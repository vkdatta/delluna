export const name="hdr_on_select";
export const id="dl_3931349f279e4662b78d";
export const url=new URL("../icons/hdr_on_select.svg?v=58c99bb558b50a6fcdf813821db19bf056508349e1d8f04e495570ee1af1f671",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
