export const name="audio_file-fill";
export const id="dl_041c7f6a05d847a3bd2e";
export const url=new URL("../icons/A/audio_file-fill.svg?v=370ab531c62cf844c4f37a155e14154bb382cfed007f80063621ef51d9921b57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
