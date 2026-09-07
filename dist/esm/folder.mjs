export const name="folder";
export const id="dl_18305818779e2027e38c";
export const url=new URL("../icons/folder.svg?v=436aba8dca33f7acf86fafc2d2610bb642bf9160d22c2bc2ae0a967ec7b934ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
