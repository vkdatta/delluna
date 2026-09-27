export const name="arrow-left-bold";
export const id="dl_d5bb7e4248df4a8aa0b2";
export const url=new URL("../icons/arrow-left-bold.svg?v=e0e22715615bbe668bc8fa973276a0eb2deb3594195aff6d82e4633d6cf3a430",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
