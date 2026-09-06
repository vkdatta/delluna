export const name="microphone-light";
export const id="dl_33f9f9fa7fea457eb481";
export const url=new URL("../icons/microphone-light.svg?v=7809c0448975df9a6943dbd696d86c3706697e228594751a49b29f0d55d4375a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
