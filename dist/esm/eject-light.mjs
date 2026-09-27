export const name="eject-light";
export const id="dl_710e9692ada148689cad";
export const url=new URL("../icons/eject-light.svg?v=cd154940d80282d35bfd2cb677c1d2c1f73b416eeb9be714da03a41de3c35be5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
