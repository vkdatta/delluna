export const name="skeleton";
export const id="dl_27e8ac81ac1e7356622d";
export const url=new URL("../icons/skeleton.svg?v=0c28eb914175abca863fb77b3261e60b2c9b6fdee8d7ddcf619127c4b5f30a15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
