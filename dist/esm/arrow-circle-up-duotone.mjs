export const name="arrow-circle-up-duotone";
export const id="dl_f79be3b5a8be4b27b8d0";
export const url=new URL("../icons/arrow-circle-up-duotone.svg?v=7496e72759ba6216f843765cd70a480e1cb04f16bb30694197e2cb058c7c7c33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
