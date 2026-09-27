export const name="tractor-duotone";
export const id="dl_85c0a7f7fc121ed66c13";
export const url=new URL("../icons/tractor-duotone.svg?v=e02ee7d5eabc061591b4d9cdf5cabfcf12528b22dcd03b754e876906d11ebbcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
