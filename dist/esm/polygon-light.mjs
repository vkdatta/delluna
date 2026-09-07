export const name="polygon-light";
export const id="dl_b5997c1886df4c7296bd";
export const url=new URL("../icons/polygon-light.svg?v=4ecb189a8c1ed4201b16108a64792b2b0993dbad1c7e0822a91912df58a01e36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
