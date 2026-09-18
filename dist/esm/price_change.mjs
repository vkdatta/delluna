export const name="price_change";
export const id="dl_e8b0e03c49ba453c973b";
export const url=new URL("../icons/P/price_change.svg?v=0172bf92d71858f568683f855619ba80dfd378da0b7ec5d22cc89cf62af4b3d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
