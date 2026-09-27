export const name="skip-back-circle-bold";
export const id="dl_d4663f5d676dc908f49e";
export const url=new URL("../icons/skip-back-circle-bold.svg?v=4dad5e181f74a6ae7aea9706e6fe02d5d655f90168b2bb911c30085b2e08d160",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
