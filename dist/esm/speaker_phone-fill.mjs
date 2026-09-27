export const name="speaker_phone-fill";
export const id="dl_5771604bd6055bf129af";
export const url=new URL("../icons/speaker_phone-fill.svg?v=ec41b278038307a67700f9ec3ef7f4c4b3a9a0f58481f1e4256b8eb5edfb8e68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
