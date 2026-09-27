export const name="waveform-slash-thin";
export const id="dl_761de708eaf1fa9c957f";
export const url=new URL("../icons/waveform-slash-thin.svg?v=66768df015da84eb7201a4d191b6a55b0b79c774b07e9b2c8bd0038004343b15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
