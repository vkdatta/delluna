export const name="rewind-bold";
export const id="dl_f5f676977bd5480093b1";
export const url=new URL("../icons/rewind-bold.svg?v=e8711381f1c8145bbffb839a1f75b3b16c16057e5a28c08293a9dd7d53b9b0e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
