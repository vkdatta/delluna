export const name="curtains_closed";
export const id="dl_af768a15ef68c465ada6";
export const url=new URL("../icons/curtains_closed.svg?v=0802925c5a2195a554c7b5cb83ecc8e774bcb3e91d1dd26733f2c4d84e321d3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
