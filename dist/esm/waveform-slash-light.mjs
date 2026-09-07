export const name="waveform-slash-light";
export const id="dl_5fa2a38dab374b97a274";
export const url=new URL("../icons/W/waveform-slash-light.svg?v=3c230ec03d7849efca17b733a62fa6709cdc4559414664727152daafab63570e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
