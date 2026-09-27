export const name="speaker_2";
export const id="dl_0b532f39889761db1f43";
export const url=new URL("../icons/speaker_2.svg?v=f2c92eabcc394c282427ae81462194be9bbe4e3b824608dd47ffb5326e776154",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
