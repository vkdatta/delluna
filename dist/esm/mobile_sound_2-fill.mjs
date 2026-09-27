export const name="mobile_sound_2-fill";
export const id="dl_73265b6b146c69a0332b";
export const url=new URL("../icons/mobile_sound_2-fill.svg?v=b6837304e3a33bc48f8634dfa8e5bdc9e26bfcde95a4f324cfdaaa31d2b5ef85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
