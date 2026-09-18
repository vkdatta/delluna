export const name="sports";
export const id="dl_71f12bb2375b4c7d8198";
export const url=new URL("../icons/S/sports.svg?v=7179fad8bdd4c3c05075ca1dd464ea23b99844b43d9a8dcdaeb1e31eb25bfb22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
