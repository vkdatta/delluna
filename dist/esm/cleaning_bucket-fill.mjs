export const name="cleaning_bucket-fill";
export const id="dl_e5832a13121c4f02891f";
export const url=new URL("../icons/cleaning_bucket-fill.svg?v=242622b27d6adafe8ee8956f65a6d4eda8232f3e795f121344800c7b1786273f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
