export const name="mobile_sound_2";
export const id="dl_6b402aac82d04f349326";
export const url=new URL("../icons/M/mobile_sound_2.svg?v=5d7f1309cf62e4981cd1b5f83ab331385b51df6d66c25e8bf20d91d1e804f8a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
