export const name="electric_bolt-fill";
export const id="dl_70738ed3246838d21872";
export const url=new URL("../icons/electric_bolt-fill.svg?v=d15f123a0eeaa306160609b428cfd5ea346f5f594a3d15d5a427db8952aaec75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
