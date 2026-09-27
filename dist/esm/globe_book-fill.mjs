export const name="globe_book-fill";
export const id="dl_9b53ce257c72b6ca9c68";
export const url=new URL("../icons/globe_book-fill.svg?v=c4453bdb471543ecf28ab04724c4417418ebef06196ad50f4a358d25cde95214",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
