export const name="mouse-simple-duotone";
export const id="dl_c1d20e7532c4444ead52";
export const url=new URL("../icons/mouse-simple-duotone.svg?v=1b6e84a4424eafdb818f75d2be15e844d4f73340f681782529f5a4bbb6545d00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
