export const name="macro_off";
export const id="dl_98363a5405a30781241a";
export const url=new URL("../icons/macro_off.svg?v=2acbc4e241f6bfc75c7e9500aff39a83068dda23fc4fda66e41bd1fca51e9f48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
