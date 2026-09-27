export const name="broadcast-bold";
export const id="dl_e5255b0970e04ed1a1a4";
export const url=new URL("../icons/broadcast-bold.svg?v=4662062fff969a5d6256fa5d41e1fdfcaf303c322ef5c73b61dce10814cccb67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
