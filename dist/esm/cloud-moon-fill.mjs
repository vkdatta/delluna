export const name="cloud-moon-fill";
export const id="dl_1d2a5869a8974e119e39";
export const url=new URL("../icons/cloud-moon-fill.svg?v=7d4873a5c19faa1b78954413b46c1a7842c03579d4b709ead5b1d1c4fabc92da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
