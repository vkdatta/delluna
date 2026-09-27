export const name="file-js-fill";
export const id="dl_869634fadb3948bda1e3";
export const url=new URL("../icons/file-js-fill.svg?v=89afc0a7e0211a372d787b993fcb586fe39433a3bcdc759714c3b5c5ea2b5fad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
