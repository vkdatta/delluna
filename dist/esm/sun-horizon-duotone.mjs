export const name="sun-horizon-duotone";
export const id="dl_40e41a635c2472a84735";
export const url=new URL("../icons/sun-horizon-duotone.svg?v=3a9016ef6bc40c75cd0bb6e97ce5a5fed30c938a89d6bd2ddf2b37718854a594",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
