export const name="skip-forward-circle-fill";
export const id="dl_1a69897ae1a1f10fa2a9";
export const url=new URL("../icons/skip-forward-circle-fill.svg?v=da87731d471e76545adf0ce2226dc4c1cdbb2b4bbc93a16a8eb96aebca11d205",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
