export const name="download";
export const id="dl_276c17f5a91c18895f3d";
export const url=new URL("../icons/download.svg?v=5a035548511fe4d2c9620847e7c90422a5277e5521ebd0d58406e07ea75e794f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
