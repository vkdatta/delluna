export const name="spatial_audio_off-fill";
export const id="dl_1446bf37134eb0f2b6f8";
export const url=new URL("../icons/spatial_audio_off-fill.svg?v=ae8c2774dac25df4c872857b885e2b06ded4d22a35f9895cbe8b713dcf5bc077",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
