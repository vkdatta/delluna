export const name="microphone-stage-duotone";
export const id="dl_fb0ac9e431ab44d39bd2";
export const url=new URL("../icons/microphone-stage-duotone.svg?v=6154fe6a350118c5d92e6804fe94ad2516fbee968286731f2562302be31777f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
