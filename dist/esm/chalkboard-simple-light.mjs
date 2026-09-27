export const name="chalkboard-simple-light";
export const id="dl_1bd181816b0b44a0b32d";
export const url=new URL("../icons/chalkboard-simple-light.svg?v=afe25ef997e3173f229c69d3038a6fc6a60bdd9eea79fb367f43988376eb9f0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
