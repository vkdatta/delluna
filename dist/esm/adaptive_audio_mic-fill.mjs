export const name="adaptive_audio_mic-fill";
export const id="dl_3ef3804b32c6d8a3f03d";
export const url=new URL("../icons/adaptive_audio_mic-fill.svg?v=1ef378ed78d6ac0aa69aa73b73633105e2e44283f3c26c9e105e5df541d018d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
