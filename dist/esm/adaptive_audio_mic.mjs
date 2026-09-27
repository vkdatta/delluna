export const name="adaptive_audio_mic";
export const id="dl_5d0980d4545c6e91f51f";
export const url=new URL("../icons/adaptive_audio_mic.svg?v=84c6cc0d3d93aae35126a5faa6eb6782a29ccc5a5bf1c2b44f7103e45825d358",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
