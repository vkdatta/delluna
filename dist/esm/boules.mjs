export const name="boules";
export const id="dl_d506e3d31d804698882a";
export const url=new URL("../icons/boules.svg?v=23b6d8e18cc399e4ea3a638a920c487525f8d4fbade7cc00907449bb4c8f1251",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
