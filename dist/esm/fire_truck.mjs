export const name="fire_truck";
export const id="dl_fdcba9d0f4da202133a2";
export const url=new URL("../icons/fire_truck.svg?v=438894aa69199660a84cde4704968da094bfc424e7fb255d0b36e6e0727daccd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
