export const name="water_full-fill";
export const id="dl_3c79a5853bb075182693";
export const url=new URL("../icons/water_full-fill.svg?v=531d4077f805406d454722977aa21323762add11674dcc9bb6e6f3a92477635e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
