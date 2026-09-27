export const name="memory_alt";
export const id="dl_d911d48c66f4aaef0f36";
export const url=new URL("../icons/memory_alt.svg?v=81b272877e729afea77746d010f70d6231b2389dcc2b651963d80eb398dab39e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
