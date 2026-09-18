export const name="switch_account-fill";
export const id="dl_9cacc6a4cfe24c858fa9";
export const url=new URL("../icons/S/switch_account-fill.svg?v=1ffbbac82568d50ea86b69b9002c8f2fbd03f56767f92322b13f1420d29259de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
