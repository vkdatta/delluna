export const name="pentagon-duotone";
export const id="dl_95ad3233fcb248f2939c";
export const url=new URL("../icons/pentagon-duotone.svg?v=edf6046f8b0e8a0969737145975055468fca9a839f753fcdf475463ae47af122",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
