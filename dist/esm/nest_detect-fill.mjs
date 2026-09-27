export const name="nest_detect-fill";
export const id="dl_2a18f9544d226dcbf367";
export const url=new URL("../icons/nest_detect-fill.svg?v=0f9f7990fff6a23badbb9b7706817f8383e3375d0ab08ccc3815bf5cea160536",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
