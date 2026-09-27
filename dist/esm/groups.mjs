export const name="groups";
export const id="dl_f97116c766e2d50a5891";
export const url=new URL("../icons/groups.svg?v=24b3c06f07abfaea705aa4238aa15da6bc4e34d1ea87973bc20ad132bb11184d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
