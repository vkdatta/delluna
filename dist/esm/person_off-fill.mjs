export const name="person_off-fill";
export const id="dl_3ee30ec543c94120ada9";
export const url=new URL("../icons/P/person_off-fill.svg?v=0f236b7e2402a5149bbc312780662816f4f415d0fbe3fd40894667609e5a45b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
