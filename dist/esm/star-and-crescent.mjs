export const name="star-and-crescent";
export const id="dl_dad574efa78a6ffb003f";
export const url=new URL("../icons/star-and-crescent.svg?v=f8c7bf56d08cce07e49a7d1cbced4cfad92d8091e664f89273f36b22d51ed2b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
