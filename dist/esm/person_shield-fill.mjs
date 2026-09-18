export const name="person_shield-fill";
export const id="dl_83526fc586f54737a69d";
export const url=new URL("../icons/person_shield-fill.svg?v=cc4712819f326aba35b135ae3beef5b30056c27267ecf8b579d9158514dcbc73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
