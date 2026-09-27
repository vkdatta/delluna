export const name="adaptive_audio_mic-fill";
export const id="dl_8771142c99e43b5d2fb8";
export const url=new URL("../icons/adaptive_audio_mic-fill.svg?v=09c94900d9264aeeab94852269ebae51fc419aca47b61fc8543db2036bda9b0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
