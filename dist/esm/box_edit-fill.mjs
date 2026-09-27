export const name="box_edit-fill";
export const id="dl_cefc97320036e9868382";
export const url=new URL("../icons/box_edit-fill.svg?v=1d9eb1e73550c88391d8047b8f2861408a6e0d19bb4a98bb2e72a39d7e194342",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
