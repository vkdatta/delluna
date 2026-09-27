export const name="stroller-fill";
export const id="dl_aec7fe82b660052ed727";
export const url=new URL("../icons/stroller-fill.svg?v=03cbcfe97025d1cecb8adde9c817edf31e17d38458a75799d9d4dc39abe053aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
