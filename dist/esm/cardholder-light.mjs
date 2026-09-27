export const name="cardholder-light";
export const id="dl_73498d91617741b39d0a";
export const url=new URL("../icons/cardholder-light.svg?v=27c61785ae659014ee3b6dc61cfde935e0bf807d62c926696a5b637f6d1b2ba6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
