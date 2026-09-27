export const name="api";
export const id="dl_dd6fab215432c32113ae";
export const url=new URL("../icons/api.svg?v=6c9da981d0d33802855089b06ee29c176c0c1695249468f9dd2c8bcbacd5dc7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
