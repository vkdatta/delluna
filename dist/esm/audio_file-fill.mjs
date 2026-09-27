export const name="audio_file-fill";
export const id="dl_82f95c3e9d152ae5c7b6";
export const url=new URL("../icons/audio_file-fill.svg?v=370ab531c62cf844c4f37a155e14154bb382cfed007f80063621ef51d9921b57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
