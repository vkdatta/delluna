export const name="currency-jpy-bold";
export const id="dl_ab2777dd1ed54e08aa89";
export const url=new URL("../icons/currency-jpy-bold.svg?v=c4622cf1921ae00165cb744c6412b2ede18bce23c1539147778233a578d9f278",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
