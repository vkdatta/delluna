export const name="suitcase-rolling-fill";
export const id="dl_7f9faa0debea22d05a50";
export const url=new URL("../icons/suitcase-rolling-fill.svg?v=d43fe89658744aff43e90087b6d51d6fb4e0ef226230e7649ec0c219ee210c69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
