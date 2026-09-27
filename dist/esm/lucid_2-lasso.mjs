export const name="lucid_2-lasso";
export const id="dl_ef4a38ccabad4573952f";
export const url=new URL("../icons/lucid_2-lasso.svg?v=d6dcfad69ad59f2fa45c91799723f56519f0b2914761efce5bd1206342baff4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
