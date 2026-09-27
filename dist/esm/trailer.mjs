export const name="trailer";
export const id="dl_fdaab6a9be4142e59c9f";
export const url=new URL("../icons/trailer.svg?v=d2097db74533db0a358eaad6a534f0241676d5dd7e36d57ef1069c5d25e323fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
