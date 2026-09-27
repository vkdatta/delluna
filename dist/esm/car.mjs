export const name="car";
export const id="dl_8d5db58372514d1992bb";
export const url=new URL("../icons/car.svg?v=35671df8a1cd9cddfd6e5a1dd2b0954700c472567c351c81bb2109fdbd0a4a8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
