export const name="zodiac-aquarius";
export const id="dl_8c365caf4dc34a92b568";
export const url=new URL("../icons/zodiac-aquarius.svg?v=8fcd64f77e22eab29c08ac2877b23d060a1b6b8760e61f4061c72ab21de842b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
