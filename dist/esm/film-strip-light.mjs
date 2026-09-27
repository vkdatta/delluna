export const name="film-strip-light";
export const id="dl_490c864776304a40a1b4";
export const url=new URL("../icons/film-strip-light.svg?v=529a6be3d1807c23392cff05a989731e4254b86b985117f529f9d72b709b17c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
