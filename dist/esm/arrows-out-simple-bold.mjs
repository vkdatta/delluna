export const name="arrows-out-simple-bold";
export const id="dl_8323701a56af415497a6";
export const url=new URL("../icons/arrows-out-simple-bold.svg?v=efdd2e8c28ca9481df3fbad7515d8374cfb5f55cbe70e423c35036d139372cdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
