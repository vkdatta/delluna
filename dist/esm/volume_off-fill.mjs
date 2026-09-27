export const name="volume_off-fill";
export const id="dl_4b247658e216dbfdb64a";
export const url=new URL("../icons/volume_off-fill.svg?v=8c22e04e061ec8d0b2f9f4738057fcc62280c1681f82ad2e1a225dde619a2860",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
