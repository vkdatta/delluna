export const name="arrows_outward";
export const id="dl_e047e5da9c98d57a11e3";
export const url=new URL("../icons/arrows_outward.svg?v=3e4e526d103cb8901ff949d19ba540dce0c78f9b60f7c53364e3cc1e375ed333",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
