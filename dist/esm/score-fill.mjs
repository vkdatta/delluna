export const name="score-fill";
export const id="dl_a5bcb6f9227548248b56";
export const url=new URL("../icons/score-fill.svg?v=0440fa1e6156df61d5dc46cd2ef617419de4eab07efe25028e577ea89eaed25c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
