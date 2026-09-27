export const name="train-duotone";
export const id="dl_2c300a53677be5bce1e7";
export const url=new URL("../icons/train-duotone.svg?v=e39d8d6a68f105d7e20a47b1034ad8585fa260956aa5b4e4469b2b7a0da35781",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
