export const name="folder-open-fill";
export const id="dl_06c74b0cb3af4c95a10c";
export const url=new URL("../icons/folder-open-fill.svg?v=a7727e8b971eaaedcef80b0e16eb27d097e73a50a802a6874616473148d7d733",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
