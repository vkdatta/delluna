export const name="background_replace";
export const id="dl_5c9a332bdf5e4925bb31";
export const url=new URL("../icons/background_replace.svg?v=1bb1d9561c9ca36fa2f3fa56f673f0b78b726f2497f780694eb7e9689b32483e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
