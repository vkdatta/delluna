export const name="16mp";
export const id="dl_ffe86da17bc4dec9404f";
export const url=new URL("../icons/16mp.svg?v=86141a7cbd47732d4aa7efba8a3787128cbecbab65ed30dc4917b92db315383c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
