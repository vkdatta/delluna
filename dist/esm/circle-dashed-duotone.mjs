export const name="circle-dashed-duotone";
export const id="dl_a08c2248e7cf4465b518";
export const url=new URL("../icons/circle-dashed-duotone.svg?v=4c77d1c7a3301907187cb2837edd398253bfff228b25829ec1d67294f6109a04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
