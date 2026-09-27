export const name="sim_card_lock";
export const id="dl_c2d962db1a405bfb6c56";
export const url=new URL("../icons/sim_card_lock.svg?v=543058656a18e93aff25736297da01f29f0be41ec28a39c1982341d496698ae0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
