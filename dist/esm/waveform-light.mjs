export const name="waveform-light";
export const id="dl_2c831248ede544d39d2c";
export const url=new URL("../icons/W/waveform-light.svg?v=32989333907e2a81c876d42bd023a91a6a6ead31482c168babb9ece6f582413e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
