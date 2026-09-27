export const name="dropdown_menu";
export const id="dl_7221214974c8cc0e909a";
export const url=new URL("../icons/dropdown_menu.svg?v=e827b18a8525fa4865dad619e19abe15e8f91f07123f086981ec82777301c432",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
