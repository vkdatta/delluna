export const name="dots-three-circle-vertical-light";
export const id="dl_4b9b946dc3494f118d44";
export const url=new URL("../icons/dots-three-circle-vertical-light.svg?v=7e4b8a49e68bb4800563c304d67e4e3a1adfcfefd3d4581f1ce226373c9680e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
