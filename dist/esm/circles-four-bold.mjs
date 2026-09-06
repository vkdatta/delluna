export const name="circles-four-bold";
export const id="dl_44ab3285f2a44d5c93c7";
export const url=new URL("../icons/circles-four-bold.svg?v=2a1fd4d4daacbb2029958b895d1b0b171281de1eefc318aa2e5a7247b5c4417f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
