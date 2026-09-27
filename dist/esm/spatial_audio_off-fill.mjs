export const name="spatial_audio_off-fill";
export const id="dl_e38d5fbbbb4ea0671d46";
export const url=new URL("../icons/spatial_audio_off-fill.svg?v=4a474940c26f1381e77d1be7c95a40f72b88b59d485ccee78e27cda0605be5c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
