export const name="currency_lira-fill";
export const id="dl_f9d4b1da3939c3b2641f";
export const url=new URL("../icons/currency_lira-fill.svg?v=f45c6f8e944df34728f3ff24bc3d86b2620efb458002b1b0dd46e898f2616f59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
