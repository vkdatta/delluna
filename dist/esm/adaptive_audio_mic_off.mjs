export const name="adaptive_audio_mic_off";
export const id="dl_c200a07cbe9198c5ede1";
export const url=new URL("../icons/adaptive_audio_mic_off.svg?v=d42cae5e46f11be9d548fe471597b5ac5d42efcd9c050a0c0e3aa152ba7d7dfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
