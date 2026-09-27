export const name="data_saver_on-fill";
export const id="dl_7428746efb12647be1f2";
export const url=new URL("../icons/data_saver_on-fill.svg?v=f2412503cfecb37f4fb8308848c06974c1fb5ce2e03bc6efbdac060acbbd2876",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
