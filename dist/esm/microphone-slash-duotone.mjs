export const name="microphone-slash-duotone";
export const id="dl_8bc479359d8446bcb2c6";
export const url=new URL("../icons/microphone-slash-duotone.svg?v=afcfe6f9a11a4a6acca9fc7100a838a0d2f5a19881233b94838b4ff87f4e66ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
