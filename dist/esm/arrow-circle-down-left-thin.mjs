export const name="arrow-circle-down-left-thin";
export const id="dl_a1fc30702bba4fe69972";
export const url=new URL("../icons/arrow-circle-down-left-thin.svg?v=a4012b795e180960978ac0b4c7552e42f14569aca72789a0993a749f27770e5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
