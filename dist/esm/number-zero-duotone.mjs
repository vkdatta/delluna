export const name="number-zero-duotone";
export const id="dl_fbe925d4d7a342b9ae55";
export const url=new URL("../icons/number-zero-duotone.svg?v=f13d75dfb896a429465c1c652ea9a40c4fc4bcffc4ad79e67394e2814ee30e64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
