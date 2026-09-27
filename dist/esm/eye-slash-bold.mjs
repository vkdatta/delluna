export const name="eye-slash-bold";
export const id="dl_127afbde007a49a89d4b";
export const url=new URL("../icons/eye-slash-bold.svg?v=c5975b8c139cbee07930f2721433564e904817fec3d10d165c5873110b01f056",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
