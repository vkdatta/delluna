export const name="mouse-middle-click";
export const id="dl_68d26f864f1a4f6ab54a";
export const url=new URL("../icons/mouse-middle-click.svg?v=09298e3df336f4b964e403fe5760831333762016d96174f0ee0b6ac96769504f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
