export const name="bucket_check";
export const id="dl_079f0691271e99ae8ec3";
export const url=new URL("../icons/bucket_check.svg?v=14ad0bcc217847d42c391c860d97f121b073dae53196569113c436c318c76738",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
