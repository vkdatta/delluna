export const name="sticker_add-fill";
export const id="dl_acf34bf14b045199b270";
export const url=new URL("../icons/sticker_add-fill.svg?v=2ed9a00d132bf448d346cdddaa48c82cafbd3bd5865c994a31cc24867c64d8ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
