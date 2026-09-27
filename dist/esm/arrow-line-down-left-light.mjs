export const name="arrow-line-down-left-light";
export const id="dl_ff6711cae6ad459183bd";
export const url=new URL("../icons/arrow-line-down-left-light.svg?v=5029a5b719886a666d1264e6b7bf6fe8001795362b87a7e880b5b90ba40b583b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
