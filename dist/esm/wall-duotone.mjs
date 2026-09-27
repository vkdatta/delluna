export const name="wall-duotone";
export const id="dl_0c622143b1a048190fd7";
export const url=new URL("../icons/wall-duotone.svg?v=3554507010c9b9089166a3f2ba4b5d782dfe2cab7475ad7d6e7352c035f79f1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
