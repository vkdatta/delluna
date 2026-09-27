export const name="armchair-thin";
export const id="dl_cdb57910d98d47619504";
export const url=new URL("../icons/armchair-thin.svg?v=4327adabcb0269beb1e380c6200cb0181ea087e7b4dfad4efbfc9c37f9fe02db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
