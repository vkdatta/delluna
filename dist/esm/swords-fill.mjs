export const name="swords-fill";
export const id="dl_fef29accee6f23b36008";
export const url=new URL("../icons/swords-fill.svg?v=dfd2da208aef2dfefad487a71aca30659b12aba082a583d27ebb8ff8b92978b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
