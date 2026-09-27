export const name="subway-duotone";
export const id="dl_6837567e63e016942f4e";
export const url=new URL("../icons/subway-duotone.svg?v=06c479c13678b11d1441951cf0bed2f8b62eb03b9b376edd828390fa484fba1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
