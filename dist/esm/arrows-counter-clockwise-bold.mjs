export const name="arrows-counter-clockwise-bold";
export const id="dl_d93ba6390649411a8ae5";
export const url=new URL("../icons/arrows-counter-clockwise-bold.svg?v=07ab2a0328a79374eb235ed772afcdc88c89e0ad4d92979f24e433267d9363cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
