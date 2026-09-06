export const name="alien-bold";
export const id="dl_3cce43995f74476da000";
export const url=new URL("../icons/alien-bold.svg?v=03c96de315f516f818e8aff6adab4fcbca5171b6adfe591fc8a8fcfba2c2cb91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
