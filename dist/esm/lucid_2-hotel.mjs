export const name="lucid_2-hotel";
export const id="dl_685e53f2b32144a2a77f";
export const url=new URL("../icons/lucid_2-hotel.svg?v=a81c03c272e7a8fa1c4346b053071eb9bb641d76de96062fc715d645d8468298",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
