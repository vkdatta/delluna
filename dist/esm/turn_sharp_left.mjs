export const name="turn_sharp_left";
export const id="dl_ee92721f8a3bf4de9a24";
export const url=new URL("../icons/turn_sharp_left.svg?v=960cf17c8a9e6858ebd001845375e399336075b61b160d69028354f756b49873",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
