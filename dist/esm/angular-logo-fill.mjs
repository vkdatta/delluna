export const name="angular-logo-fill";
export const id="dl_61c9e27a5a32480d9da0";
export const url=new URL("../icons/angular-logo-fill.svg?v=8074ef0b7ac5424105c7974c66178fbb55ae7de440919fa6b5dbd750d1532d7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
