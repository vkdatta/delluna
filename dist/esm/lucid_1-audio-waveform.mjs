export const name="lucid_1-audio-waveform";
export const id="dl_cca15825f6cd4a18ba0d";
export const url=new URL("../icons/lucid_1-audio-waveform.svg?v=2ad151e8752e1850deee8fd9923e78400a4e720163bcbeebe7cc9e06703f570f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
