export const name="mask-happy";
export const id="dl_f3d593dc090848e7b210";
export const url=new URL("../icons/mask-happy.svg?v=745da69d808b5d54adc428797e9353fb3aea5f9294c903bddad6bacbc5f1de2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
