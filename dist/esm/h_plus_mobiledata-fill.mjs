export const name="h_plus_mobiledata-fill";
export const id="dl_6d4295ea45accc08655a";
export const url=new URL("../icons/h_plus_mobiledata-fill.svg?v=f8f9ec9185e7a3b04b34b7fa2956b8ca296e75ada09cdba732b52b5e411bbeda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
