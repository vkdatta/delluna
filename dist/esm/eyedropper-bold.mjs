export const name="eyedropper-bold";
export const id="dl_75628b9d7a4240e6b75f";
export const url=new URL("../icons/eyedropper-bold.svg?v=3000d03ac0832aaee93d23aa430f9cecac1b3b299c72612bf32f71be4aee0fb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
