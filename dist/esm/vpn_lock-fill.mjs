export const name="vpn_lock-fill";
export const id="dl_67869cb79666a498eb68";
export const url=new URL("../icons/vpn_lock-fill.svg?v=80bd70c5e0a047dfc9d6affbbbae9a1d26040e79243735e831ece7b855653c49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
