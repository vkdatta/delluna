export const name="sync-fill";
export const id="dl_6a46fab1f06107f3ba7a";
export const url=new URL("../icons/sync-fill.svg?v=092fb2574e4dae8391520b30802b1da27f1b6ca87ba90a6b12be9ec162362814",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
