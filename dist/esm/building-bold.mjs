export const name="building-bold";
export const id="dl_053e5a5bc1c24e22855e";
export const url=new URL("../icons/building-bold.svg?v=049df42c9351795cb4ac780213a5dbcbda8c68cb7f9f2737bc86263ea5ac0902",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
