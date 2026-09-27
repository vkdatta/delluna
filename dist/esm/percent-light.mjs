export const name="percent-light";
export const id="dl_15d2707c9b984f0ea17d";
export const url=new URL("../icons/percent-light.svg?v=53ff57ed02940f338c9c820dc73880149ed1667e192cff259c789fd9261b31c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
