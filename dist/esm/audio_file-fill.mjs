export const name="audio_file-fill";
export const id="dl_01cc16db35f5874f3792";
export const url=new URL("../icons/audio_file-fill.svg?v=acc3f12fd173ce2dba629af920a60b85d7365b3f2ee9951de022c378434008fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
