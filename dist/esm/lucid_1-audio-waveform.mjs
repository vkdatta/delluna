export const name="lucid_1-audio-waveform";
export const id="dl_cca15825f6cd4a18ba0d";
export const url=new URL("../icons/lucid_1-audio-waveform.svg?v=f6be4961a1618022b8bce37ae2a3aa7083a90858ad962422e9f0040fc37e5f95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
