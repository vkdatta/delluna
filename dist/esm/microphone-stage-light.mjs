export const name="microphone-stage-light";
export const id="dl_358f698b3e75433fa121";
export const url=new URL("../icons/microphone-stage-light.svg?v=a29eaae820ab85fa884c9be0b4c8c6428610716a1dc573cd84f2ea9b90fe52d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
