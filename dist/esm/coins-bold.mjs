export const name="coins-bold";
export const id="dl_c268311cc09345b78e50";
export const url=new URL("../icons/coins-bold.svg?v=acaeeb93c5a1d2c525a79483624a6356fe9b2150fe64960d0dbfe6e61fc8a571",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
