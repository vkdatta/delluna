export const name="speaker-simple-slash-duotone";
export const id="dl_ece634abbbca4236821a";
export const url=new URL("../icons/S/speaker-simple-slash-duotone.svg?v=3739562372f520aa09cb697d3f088a88335f0d33a097ee6538d092600f7ea0fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
