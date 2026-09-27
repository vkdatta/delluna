export const name="sound_detection_loud_sound-fill";
export const id="dl_dfa97553d7434b31dec0";
export const url=new URL("../icons/sound_detection_loud_sound-fill.svg?v=ec7a73edbdd131ac9be51351895d6560a129a36d8c92901278eb038b12520ccb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
