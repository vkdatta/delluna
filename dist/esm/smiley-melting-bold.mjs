export const name="smiley-melting-bold";
export const id="dl_774b3d3126384c4870f4";
export const url=new URL("../icons/smiley-melting-bold.svg?v=c0fd4eb83d39775a15cf8b0b607146f61968d5e86fcd19f7202cc7ce83d6e3cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
