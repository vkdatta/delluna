export const name="baby-carriage-thin";
export const id="dl_f2acebe7931848d0b333";
export const url=new URL("../icons/baby-carriage-thin.svg?v=779dc8257e211469b44613d61430c6bb514eaa5726b35724fb018aa0246ccdbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
