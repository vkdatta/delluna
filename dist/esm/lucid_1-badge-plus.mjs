export const name="lucid_1-badge-plus";
export const id="dl_43facf343f4e414a98f1";
export const url=new URL("../icons/lucid_1-badge-plus.svg?v=8a881edb6f198861b9b62e1f58964233458929f5ae76d044280c1c36948fda06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
