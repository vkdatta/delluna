export const name="wifi-high-duotone";
export const id="dl_cca7e862be104b2ea11d";
export const url=new URL("../icons/W/wifi-high-duotone.svg?v=8786219e51e953522cf0d170f13d70acac93fc795a9fabb711351ae4e71ae2c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
