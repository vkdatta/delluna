export const name="airplane-tilt-light";
export const id="dl_1c228784838147e9b066";
export const url=new URL("../icons/airplane-tilt-light.svg?v=6c437bc6b1a6b1739a0beb62ba9ba60b4e8f178c3ecb2851f3fad304e86267cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
