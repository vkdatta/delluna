export const name="waveform-slash";
export const id="dl_57c0a6d1999bbfb0919e";
export const url=new URL("../icons/waveform-slash.svg?v=620f9831c035555f1675513cff2108d12914a4866098b081949fe7cd77ac30d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
