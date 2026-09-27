export const name="sneaker-light";
export const id="dl_03abb5829100ff6e2a32";
export const url=new URL("../icons/sneaker-light.svg?v=baf1d89946d7706224ecfccb64a0a98410147d0495230757bf1835264b8b5834",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
