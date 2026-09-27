export const name="spatial_audio_off";
export const id="dl_dfdcc4c47a763b4c57fa";
export const url=new URL("../icons/spatial_audio_off.svg?v=9d250fea7af9021170f3aeec2e092d6fa352216ef7c1e06a79d86b2f7efdf2e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
