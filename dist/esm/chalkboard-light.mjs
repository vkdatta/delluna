export const name="chalkboard-light";
export const id="dl_07e10d6d1cfd4e31a74b";
export const url=new URL("../icons/chalkboard-light.svg?v=460f219321dc1ccddb41ec8cf18a585cd67deca6df975b68a1df0ef0d4153240",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
