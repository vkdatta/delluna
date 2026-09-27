export const name="heart-straight-duotone";
export const id="dl_e42e33fe9c4f458782cd";
export const url=new URL("../icons/heart-straight-duotone.svg?v=3254fc2f3c453bb962648ac4c598a0db3660ac6174cd33f025f49c71af14afa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
