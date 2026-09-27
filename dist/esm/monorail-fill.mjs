export const name="monorail-fill";
export const id="dl_90a31f33f5efa92fa9ed";
export const url=new URL("../icons/monorail-fill.svg?v=646f2e6a87b8326c457d4c25e542d59be113e48cddf7bf4bea23df39353291ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
