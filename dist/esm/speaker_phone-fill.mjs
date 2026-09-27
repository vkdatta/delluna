export const name="speaker_phone-fill";
export const id="dl_8a01a01a5170750a8a13";
export const url=new URL("../icons/speaker_phone-fill.svg?v=84ef985ebfdb98446ba077be16c4d0d8704b8b32d992f5b457d1e4398910df48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
