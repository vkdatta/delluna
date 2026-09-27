export const name="arrow-down-light";
export const id="dl_682b7a3fe6fe49c585d7";
export const url=new URL("../icons/arrow-down-light.svg?v=09749f3f918e67a18bb6c1a72a145363961e91b815bacd47c9aa6eca7c9de247",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
