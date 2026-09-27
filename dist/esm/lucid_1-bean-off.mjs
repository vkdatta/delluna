export const name="lucid_1-bean-off";
export const id="dl_2e1e47c71cbb43c08fa9";
export const url=new URL("../icons/lucid_1-bean-off.svg?v=fe969226c4afd28829686cb779f89455d949a099022adebf128e6938836b3753",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
