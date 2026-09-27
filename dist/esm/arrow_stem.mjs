export const name="arrow_stem";
export const id="dl_45c7abc018b54602a778";
export const url=new URL("../icons/arrow_stem.svg?v=6312e5f88bacaec727b7abf468fb6c9c3d7e3e5ed0e742ac23bd9a469c3e796e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
