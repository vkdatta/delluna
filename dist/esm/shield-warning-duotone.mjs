export const name="shield-warning-duotone";
export const id="dl_a33639146a5b4681b137";
export const url=new URL("../icons/S/shield-warning-duotone.svg?v=a5f6a9fa81eab8703e656e34de2e45a54061544bfeb136bae62f008e87fb81f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
