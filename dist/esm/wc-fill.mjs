export const name="wc-fill";
export const id="dl_a24fb7619f2e3548dfad";
export const url=new URL("../icons/wc-fill.svg?v=6c991308e62f1137c9818bb144613351ed86a951f220406b36dccdc00ae434c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
