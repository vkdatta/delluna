export const name="pizza-duotone";
export const id="dl_9d2e94f5eca14fdd8fe4";
export const url=new URL("../icons/pizza-duotone.svg?v=a38d32f8cb2d9ca1c28da32bd3c6b40ed6920a824f471db5179be77bfcaa666f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
