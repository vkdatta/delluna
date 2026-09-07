export const name="circle-half-light";
export const id="dl_56ed74bf945b41768f90";
export const url=new URL("../icons/circle-half-light.svg?v=16f4adbd56c8ebd256288acd0315d37fe307b4377a86a953f0c5df39026aa6d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
