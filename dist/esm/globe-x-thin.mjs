export const name="globe-x-thin";
export const id="dl_39c6235b6f684337b008";
export const url=new URL("../icons/globe-x-thin.svg?v=429e30b14e630d963edea12a0dc4ee9214cdc1f8d26d7045eca7a2db55eb31fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
