export const name="number-circle-one-light";
export const id="dl_498b26637632471b8441";
export const url=new URL("../icons/number-circle-one-light.svg?v=d2c4bd689dc2c637b5c90cd7fd6abd93585ae961ac6c922889a6e681220b9a63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
