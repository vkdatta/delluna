export const name="settings_account_box";
export const id="dl_115d3085571457c2b988";
export const url=new URL("../icons/settings_account_box.svg?v=f5bbe77424fc0e93bb75c923081e305d2ba55390dc4e493968b7743538b12ba3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
