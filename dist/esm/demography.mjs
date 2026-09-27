export const name="demography";
export const id="dl_07950528ce819afb4baa";
export const url=new URL("../icons/demography.svg?v=794a7b734f050bfa3526da6a5441bb84ae8f9d31326e362de3fc6cf60623e715",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
