export const name="beach_access-fill";
export const id="dl_c523f67d221c17300773";
export const url=new URL("../icons/beach_access-fill.svg?v=80d9e3d14c1905448ec35c6ddabc3ee3a4f3bc898c2d63d53cd49c184d9b7031",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
