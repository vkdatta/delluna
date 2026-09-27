export const name="soundbar-fill";
export const id="dl_2b094878435b5513aa01";
export const url=new URL("../icons/soundbar-fill.svg?v=d1d4e0e0cb875eaf9cad628624fbedd1fe7b51056fa4a6c328e162bd5dc37174",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
