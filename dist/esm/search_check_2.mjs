export const name="search_check_2";
export const id="dl_50cedfc7d0d176e3bcad";
export const url=new URL("../icons/search_check_2.svg?v=afc155879566b3212c3e626755a171f2aa2965394cbedfd3674124b65cfe05a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
