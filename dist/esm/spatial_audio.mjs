export const name="spatial_audio";
export const id="dl_fba21b78303b10f06331";
export const url=new URL("../icons/spatial_audio.svg?v=509a6dc61d2aec97ab26b652a22fb858bf5113238ea9903a0407fcde248c738c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
