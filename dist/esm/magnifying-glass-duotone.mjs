export const name="magnifying-glass-duotone";
export const id="dl_f08be23b87a1478f8747";
export const url=new URL("../icons/magnifying-glass-duotone.svg?v=f779d0b5698e004d6284a092ea137f97ed0866607b9e5f15c65698288cb7ff89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
