export const name="beach-ball-duotone";
export const id="dl_fde7f2879cda45f1bc55";
export const url=new URL("../icons/beach-ball-duotone.svg?v=f9934b6c27954d9abb090ed63c1758fb69aa83d9eb89801634320d569b99e0cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
