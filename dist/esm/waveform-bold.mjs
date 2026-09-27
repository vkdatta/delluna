export const name="waveform-bold";
export const id="dl_4a8942e7d5de0043630e";
export const url=new URL("../icons/waveform-bold.svg?v=c7342077fe22ad0179541da8d46b990a7ce780dcd1e69f9612ade8d17d5e26dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
