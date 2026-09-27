export const name="sheets_rtl";
export const id="dl_682ca5e28bacf2daecc3";
export const url=new URL("../icons/sheets_rtl.svg?v=ddea5e268d606ce92ea7b8703ca8d709570dfd49445c31dadec13e61430b3e2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
