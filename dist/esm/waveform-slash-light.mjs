export const name="waveform-slash-light";
export const id="dl_39a23a29c8b7e17b4b4d";
export const url=new URL("../icons/waveform-slash-light.svg?v=bfdd995e6bbea75cc779b4d39d07418a75cdef200eafa5cc7be491c609a95655",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
