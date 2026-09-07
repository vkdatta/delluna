export const name="sort-descending-duotone";
export const id="dl_bcdf501729754ebcbd46";
export const url=new URL("../icons/S/sort-descending-duotone.svg?v=1b71a90d13b554e30011f445c582cf086b6f354bfa3d99aba76df471ddf71118",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
