export const name="adaptive_audio_mic-fill";
export const id="dl_3f299540a3f076ac2780";
export const url=new URL("../icons/adaptive_audio_mic-fill.svg?v=74eac9ad796973994362e8c2c636a690ec808f664beffae078e2e406d6d35dba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
