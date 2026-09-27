export const name="letter-circle-p";
export const id="dl_65a31c3abf4346b9b206";
export const url=new URL("../icons/letter-circle-p.svg?v=77e93a894ea2b8c36ccada39e203da99e54249285b732323593cdad9ab9a9610",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
