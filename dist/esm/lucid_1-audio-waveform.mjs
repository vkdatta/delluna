export const name="lucid_1-audio-waveform";
export const id="dl_cca15825f6cd4a18ba0d";
export const url=new URL("../icons/lucid_1-audio-waveform.svg?v=80a52f1bc506f1b50d22230a31a827f7a951ff38f85ce5179c85a259be50718c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
