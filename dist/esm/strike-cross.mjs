export const name="strike-cross";
export const id="dl_c9f9a443dd74da3c7dd6";
export const url=new URL("../icons/strike-cross.svg?v=1d5a041374856e6479a7ea5c535655d31e481cb9613f16092a0475c9648450d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
