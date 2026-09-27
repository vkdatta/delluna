export const name="car-battery-light";
export const id="dl_ccbc1fa27363494388d4";
export const url=new URL("../icons/car-battery-light.svg?v=ac40033b45a46c3ad33aca1554a11243ecb949e54c486179edaba8b1f5ce814b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
