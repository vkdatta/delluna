export const name="arrow-square-down-duotone";
export const id="dl_de2e7431d4914dd29158";
export const url=new URL("../icons/arrow-square-down-duotone.svg?v=483378837f96f6c0f85c6fb2fa2219d209f77d1670724bf031a1d6dfd46580bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
