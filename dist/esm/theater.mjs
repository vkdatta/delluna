export const name="theater";
export const id="dl_3ebbaaa83be5455c8f43";
export const url=new URL("../icons/theater.svg?v=8c2db8bb8980399aab605f993335a2073ecc3146911d4328fc2d6a84899e6d7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
