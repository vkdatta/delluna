export const name="lucid_1-arrow-down-wide-narrow";
export const id="dl_e085e3f8c5dc4b08a690";
export const url=new URL("../icons/lucid_1-arrow-down-wide-narrow.svg?v=02c197943973dcab0be0adbe1e6ab07a1f860ae87c8999c3cba14648176a8523",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
