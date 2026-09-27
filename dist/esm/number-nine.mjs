export const name="number-nine";
export const id="dl_eaa5d179fd2e4c919fb3";
export const url=new URL("../icons/number-nine.svg?v=d8ab23bea5a5c441385d94801fa791bd08eac5a9ade92d3c0319b49c024587f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
