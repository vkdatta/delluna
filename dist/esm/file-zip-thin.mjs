export const name="file-zip-thin";
export const id="dl_f0df06cb2ccb4a199d36";
export const url=new URL("../icons/file-zip-thin.svg?v=c85c01da2199a725343118d04712e941f60516a8364b6b9ddf6ba98d3d1d88bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
