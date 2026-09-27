export const name="number-circle-six";
export const id="dl_d4dc7715914b4a25b192";
export const url=new URL("../icons/number-circle-six.svg?v=4d0bed2ec6a0033de5cf7c9b186fb4f31dd5114541c508dc40ba9166fa92a2af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
