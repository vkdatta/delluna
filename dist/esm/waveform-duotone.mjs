export const name="waveform-duotone";
export const id="dl_9d47b29d3f18c71cf159";
export const url=new URL("../icons/waveform-duotone.svg?v=4a7793729d5c64166be5618c4066865ee68db433e69ff8dd2257dc1d7ceff629",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
