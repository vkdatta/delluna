export const name="railway_alert-fill";
export const id="dl_33a474676e0e41998f6f";
export const url=new URL("../icons/R/railway_alert-fill.svg?v=4be894707ab03732b6a410653df9e31987f31018078a397f30f423a032ab7bf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
