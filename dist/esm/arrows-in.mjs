export const name="arrows-in";
export const id="dl_69e781b3acee4dce9606";
export const url=new URL("../icons/arrows-in.svg?v=4640e9c3f92fff4612ed6094c8ebca027da14ab9f2978292707e349dd4346940",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
