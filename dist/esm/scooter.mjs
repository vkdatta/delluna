export const name="scooter";
export const id="dl_0a35ef736e1a103e8794";
export const url=new URL("../icons/scooter.svg?v=a853c062b55d72cfe2f7f11e32c0710b84aaee7f8f8dc3387acb2673a35f8822",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
