export const name="single_arrow-fill";
export const id="dl_818ece7e41ab997e79a5";
export const url=new URL("../icons/single_arrow-fill.svg?v=46bf32bd81f2ec8f7b97756d417034d63bc949a0c9d1b0482a5c9a348f5c9f04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
