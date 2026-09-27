export const name="sports";
export const id="dl_eeaf27ec7f9267f60170";
export const url=new URL("../icons/sports.svg?v=7179fad8bdd4c3c05075ca1dd464ea23b99844b43d9a8dcdaeb1e31eb25bfb22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
