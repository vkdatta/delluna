export const name="battery_change";
export const id="dl_6fea6ecc7ac999e22e19";
export const url=new URL("../icons/battery_change.svg?v=0972eccfa2e4c3bc4f46284cfdcf8c5136857ae98fe7c1b18458189feeb5e9e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
