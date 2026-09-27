export const name="spatial_audio_off";
export const id="dl_069e46e99bd620243921";
export const url=new URL("../icons/spatial_audio_off.svg?v=1d8cf634bfb5a54c182ec8ab8c91a0e8c3aab8c7d31b9ab8acdf564f10351a73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
