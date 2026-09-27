export const name="waveform-light";
export const id="dl_29f246dbc2284fd4e532";
export const url=new URL("../icons/waveform-light.svg?v=7ebabad4ae9f92b061e48b4132d3553e0e5053dba9c4f864957a9d3d2eed6cfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
