export const name="less-than-duotone";
export const id="dl_0822fdef8a70451ebef6";
export const url=new URL("../icons/less-than-duotone.svg?v=cae3c4302b4a2c84b4c502a1db18ee950e6300f5aa6a279baf9210968837129e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
