export const name="open_in_full-fill";
export const id="dl_c6f1077e8a684f77b263";
export const url=new URL("../icons/O/open_in_full-fill.svg?v=23230889430e52723a2f5c8325f28e8b35435edf2b4b8ecdbe775e99fa56b15f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
