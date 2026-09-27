export const name="battery-low-thin";
export const id="dl_f70caa34b1a1400d9e19";
export const url=new URL("../icons/battery-low-thin.svg?v=8a4c6acbceb81a3be2ad49d5b22baaa2873f100d06d876bbb38482a32ee5c474",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
