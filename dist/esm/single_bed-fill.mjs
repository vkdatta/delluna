export const name="single_bed-fill";
export const id="dl_311c4e725d6d80aee8cf";
export const url=new URL("../icons/single_bed-fill.svg?v=2a3ab8f9356741ca3b26a34bd5defaf053b082d8893c4d75b47b55df1ed1b760",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
