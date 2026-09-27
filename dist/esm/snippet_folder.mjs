export const name="snippet_folder";
export const id="dl_b190a5b61d94c8538076";
export const url=new URL("../icons/snippet_folder.svg?v=fda9501391cf8de05a47d197017e3d639061249da872ae09bab9df62140ba321",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
