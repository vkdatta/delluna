export const name="money-light";
export const id="dl_e87b90a1fffd4d248949";
export const url=new URL("../icons/money-light.svg?v=24e2fa02d792aa47cdf69b935c4572c2839eca931d56a0c9f3c826f6d7268533",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
