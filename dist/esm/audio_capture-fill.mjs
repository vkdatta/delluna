export const name="audio_capture-fill";
export const id="dl_a313b1f24fb527f221be";
export const url=new URL("../icons/audio_capture-fill.svg?v=75e768a479186a9a3bad4bb85fa3cf597b365c9652ab9178efeeefc28a1ac7f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
