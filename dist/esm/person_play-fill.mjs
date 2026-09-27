export const name="person_play-fill";
export const id="dl_3e17d58b121550adec7a";
export const url=new URL("../icons/person_play-fill.svg?v=36f110edf9052e96fca290e71e23167388fabaca34c1d33dfbfbf2ead346c6c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
