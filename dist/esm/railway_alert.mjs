export const name="railway_alert";
export const id="dl_d680a25c23f941cda727";
export const url=new URL("../icons/R/railway_alert.svg?v=151268fd494f0fd069689d169a796f174ec08d495d7ad78920b27d0f00061f4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
