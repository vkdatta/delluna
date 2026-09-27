export const name="bookmarks-simple-fill";
export const id="dl_cba0b0b5781e4ab49eb7";
export const url=new URL("../icons/bookmarks-simple-fill.svg?v=4994b5abc305f9b33aba98df1307a081d69c3a0a904b022eade66e95f6169b34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
