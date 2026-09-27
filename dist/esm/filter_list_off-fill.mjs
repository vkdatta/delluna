export const name="filter_list_off-fill";
export const id="dl_afe8d553488134527766";
export const url=new URL("../icons/filter_list_off-fill.svg?v=88f9c9996eae9ed655698614ac0a13eca1e062d98113c622c087a082ea06302a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
