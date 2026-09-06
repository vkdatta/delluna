export const name="bicycle-duotone";
export const id="dl_c776fc9ac29548a2adc9";
export const url=new URL("../icons/bicycle-duotone.svg?v=f99f21cc07a6ae8ad32cdf5b986888e293f9f572c039912d60a4a6efb30a4ccf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
