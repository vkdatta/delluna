export const name="matrix-logo-thin";
export const id="dl_50f83b9c87024cd38f1d";
export const url=new URL("../icons/matrix-logo-thin.svg?v=75ba079e542bb5e4d6877e15474b501ee5277e72d2a64272188017849f4997a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
