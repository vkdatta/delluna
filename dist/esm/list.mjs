export const name="list";
export const id="dl_ee7a5ba65441414abec5";
export const url=new URL("../icons/list.svg?v=5bd0adc46a5a62c551fb0bff44dd120d896b6d680c362ddfcddc47e34009414d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
