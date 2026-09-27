export const name="trip-fill";
export const id="dl_bb5d2cc374b3acfd0f47";
export const url=new URL("../icons/trip-fill.svg?v=000b550fd77b1ab7e39be4afd21f8920f23a2fa258cebbee1ff41acc2af8db28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
