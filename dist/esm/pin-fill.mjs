export const name="pin-fill";
export const id="dl_637f0c15db70a8481e85";
export const url=new URL("../icons/pin-fill.svg?v=893186c9bd70956a87548153843ce4dcfd90f4de2ef44130717214f6eead6ed3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
