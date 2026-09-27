export const name="lucid_3-sigma";
export const id="dl_95ca081f2ecb4013a830";
export const url=new URL("../icons/lucid_3-sigma.svg?v=a14ee3075842ac46b55d115d338337c2b3f2fba1bbf946a75f43393bfe267897",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
