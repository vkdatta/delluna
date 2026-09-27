export const name="currency-dollar-light";
export const id="dl_4cf37938cada44f0a25f";
export const url=new URL("../icons/currency-dollar-light.svg?v=146778cb38da70981ac5c82ab05c0292e328f264ffc8feca62836a2a8c3e2661",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
