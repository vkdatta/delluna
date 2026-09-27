export const name="waveform-slash-fill";
export const id="dl_e88a2cae131255838b6a";
export const url=new URL("../icons/waveform-slash-fill.svg?v=771be16a54880cdd1b3d7cba0c7b375f997882b42c4238129a67d3e5815cef59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
