export const name="train-regional-duotone";
export const id="dl_f36cec32da2bd33d791a";
export const url=new URL("../icons/train-regional-duotone.svg?v=afa68d714d8a63dfeee6a89079b3c05a0386943114387fbc8ed389b96df0018e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
