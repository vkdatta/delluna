export const name="waveform-thin";
export const id="dl_e5969173dbc901056f17";
export const url=new URL("../icons/waveform-thin.svg?v=79e140af220b9525619def08d7bdec0ce030ad98b14aaed998314e7bb5cc4d6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
