export const name="number-circle-three-light";
export const id="dl_571423a324f84e81bb2b";
export const url=new URL("../icons/number-circle-three-light.svg?v=192b96bbe30245f6f907d01b84f51dfb2e341e3d58108e34c88880261d48fc4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
