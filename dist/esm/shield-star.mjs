export const name="shield-star";
export const id="dl_0487526618b98d6d759d";
export const url=new URL("../icons/shield-star.svg?v=d870f8ae39f808ad74b1a1dd99d4f5a1d2be6a2f270c96978205a223f85f6eaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
