export const name="dots-six-vertical";
export const id="dl_d6fda55d101d4ad68e12";
export const url=new URL("../icons/dots-six-vertical.svg?v=abe2a1d8ca47a0bfacf2eb999c2a5773b128e2225235bdcfd7568cb70b3011b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
