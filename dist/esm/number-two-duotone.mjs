export const name="number-two-duotone";
export const id="dl_6e564802dff24fceb1c4";
export const url=new URL("../icons/number-two-duotone.svg?v=c393d75ffbadc3d73226055a1d7419858525cfc80f5ff68dae5eb806fa6df0c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
