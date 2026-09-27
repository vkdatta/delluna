export const name="specific_gravity";
export const id="dl_ff4248089b871f5ff9ff";
export const url=new URL("../icons/specific_gravity.svg?v=608665a2fd5b6cb66b212058b56bff923f68be7e77b0b560a72ee0479733d606",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
