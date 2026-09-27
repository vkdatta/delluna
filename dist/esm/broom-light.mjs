export const name="broom-light";
export const id="dl_88b8a3a6d5964505b7d8";
export const url=new URL("../icons/broom-light.svg?v=8dc3a73765f7a1206dd1e96bc62edab0fc1a56fe2e7e7b92f5ddb0e90c753582",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
