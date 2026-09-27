export const name="star-and-crescent";
export const id="dl_588ac146820b604d0f05";
export const url=new URL("../icons/star-and-crescent.svg?v=70e8fd380d4902cce6e4e3bad4fd26ec40ac66d09df5821d2dc10ac84d9fa24a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
