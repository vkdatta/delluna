export const name="waveform";
export const id="dl_ab61f6664deddfa7fac1";
export const url=new URL("../icons/waveform.svg?v=7b09e0166790086c4f514df5bec64c83d6a18c1b244ddf4a54125cf9b21c1d17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
