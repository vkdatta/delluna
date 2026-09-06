export const name="identification-card-light";
export const id="dl_3bbfca8ea37145828e63";
export const url=new URL("../icons/identification-card-light.svg?v=5c11e19dc2f1daadb3b89a09eaa0f62434c6d0080820688847ddf1bbe195430f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
