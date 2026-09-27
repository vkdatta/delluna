export const name="file-png";
export const id="dl_a7cd59a83f6d4da78775";
export const url=new URL("../icons/file-png.svg?v=ac3581f4df9781a86931cd4c21a6d7ef02f5275382ea417d2e3b8489a8a4e9ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
