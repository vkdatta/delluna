export const name="lucid_3-sigma";
export const id="dl_95ca081f2ecb4013a830";
export const url=new URL("../icons/lucid_3-sigma.svg?v=9becad25ab6c074870dac7e816b835b29871ba8fdd082e4a0693ccdaa4984007",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
