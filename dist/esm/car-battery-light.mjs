export const name="car-battery-light";
export const id="dl_ccbc1fa27363494388d4";
export const url=new URL("../icons/car-battery-light.svg?v=2e68e8796cce5160f0ebdf040b65a085e8db92e5646d7e051b4b1bf1a0358f3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
