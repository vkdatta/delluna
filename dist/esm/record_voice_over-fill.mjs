export const name="record_voice_over-fill";
export const id="dl_1aab3bdbba3800c05932";
export const url=new URL("../icons/record_voice_over-fill.svg?v=c33ffbb35dd9a855cecd111b507f7b2b0c85a0c5899b85fe34b5027e488f3ce5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
