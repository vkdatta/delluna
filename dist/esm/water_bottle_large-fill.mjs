export const name="water_bottle_large-fill";
export const id="dl_3114292150798beb4dfa";
export const url=new URL("../icons/water_bottle_large-fill.svg?v=7921135c5409bb8b53a7a15e389494478d0999fcfe089bbf75eb41c2ba9d921b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
