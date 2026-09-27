export const name="flag-banner-bold";
export const id="dl_84b2ecd66a70409cb33b";
export const url=new URL("../icons/flag-banner-bold.svg?v=10596e13fe83aeb199f949bdfe9c048f96fe4b7ef7da71e32aeaa437046598c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
