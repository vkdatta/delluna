export const name="alarm-fill";
export const id="dl_cbf73d6f82814a52af18";
export const url=new URL("../icons/alarm-fill.svg?v=44da3c2e7b5a4b97656d85592669bbd33fa6362b023f639292891b3438795e77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
